<?php
/**
 * Contact Form Handler for SiteGround
 * This file handles form submissions from the ServiceRequestForm component
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$jobDescription = isset($data['jobDescription']) ? trim($data['jobDescription']) : '';
$selectedService = isset($data['selectedService']) ? trim($data['selectedService']) : '';

if (empty($name) || empty($email) || empty($phone) || empty($jobDescription)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Email configuration
$to = 'service@flexusnet.com'; // Change this to your email
$subject = 'New Service Request - FlexusNet';

// Service name mapping
$serviceNames = [
    'laptop-desktop' => 'Laptop/Desktop/Office equipment',
    'network' => 'Network Installations',
    'pos' => 'POS Systems'
];

$serviceName = isset($serviceNames[$selectedService]) ? $serviceNames[$selectedService] : 'Not specified';

// Create email body
$message = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #00d4ff; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #00d4ff; }
        .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #00d4ff; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Service Request</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Service Type:</div>
                <div class='value'>{$serviceName}</div>
            </div>
            <div class='field'>
                <div class='label'>Name:</div>
                <div class='value'>{$name}</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>{$email}</div>
            </div>
            <div class='field'>
                <div class='label'>Phone:</div>
                <div class='value'>{$phone}</div>
            </div>
            <div class='field'>
                <div class='label'>Job Description:</div>
                <div class='value'>" . nl2br(htmlspecialchars($jobDescription)) . "</div>
            </div>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: FlexusNet Website <noreply@flexusnet.com>" . "\r\n";
$headers .= "Reply-To: {$email}" . "\r\n";

// Send email
$mailSent = mail($to, $subject, $message, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode(['message' => 'Request submitted successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email. Please try again later.']);
}
?>

