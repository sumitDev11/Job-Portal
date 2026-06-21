export const forgotPasswordTemplate = (resetLink: string) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
            background-color: #eff6ff;
        }
        .email-wrapper {
            width: 100%;
            border-collapse: collapse;
        }
        .email-container {
            width: 600px;
            border-collapse: collapse;
            background-color: #ffffff;
            box-shadow: 0 4px 16px rgba(37, 99, 235, 0.12);
            border-radius: 12px;
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #6366f1 100%);
            padding: 36px 30px;
            text-align: center;
        }
        .logo {
            margin: 0 0 18px;
            font-size: 22px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: -0.02em;
        }
        .logo .light {
            font-weight: 400;
            opacity: 0.85;
        }
        .header-icon {
            display: inline-block;
            width: 56px;
            height: 56px;
            line-height: 56px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.15);
            font-size: 26px;
            margin-bottom: 14px;
        }
        .header h1 {
            margin: 0;
            color: #ffffff;
            font-size: 24px;
            font-weight: 700;
        }
        .content {
            padding: 40px 36px;
        }
        .text {
            margin: 0 0 18px;
            color: #1e293b;
            font-size: 16px;
            line-height: 1.6;
        }
        .text-muted {
            margin: 0 0 18px;
            color: #64748b;
            font-size: 14px;
            line-height: 1.6;
        }
        .button-wrapper {
            margin: 28px 0;
            text-align: center;
        }
        .button {
            display: inline-block;
            padding: 14px 42px;
            background: linear-gradient(135deg, #2563eb 0%, #6366f1 100%);
            color: #ffffff;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            box-shadow: 0 4px 10px rgba(37, 99, 235, 0.35);
        }
        .link-box {
            margin: 0 0 20px;
            padding: 14px 16px;
            background-color: #eff6ff;
            border-left: 4px solid #2563eb;
            color: #2563eb;
            font-size: 13px;
            word-break: break-all;
            border-radius: 6px;
        }
        .warning {
            margin: 20px 0;
            padding: 14px 16px;
            background-color: #fffbeb;
            border-left: 4px solid #f59e0b;
            color: #92400e;
            font-size: 14px;
            line-height: 1.6;
            border-radius: 6px;
        }
        .divider {
            border: none;
            border-top: 1px solid #e2e8f0;
            margin: 28px 0;
        }
        .footer {
            background-color: #f8fafc;
            padding: 28px 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        .footer-text {
            margin: 0 0 8px;
            color: #94a3b8;
            font-size: 12px;
        }
        .footer-text:last-child {
            margin: 0;
        }
    </style>
</head>
<body>
    <table role="presentation" class="email-wrapper">
        <tr>
            <td align="center" style="padding: 40px 16px;">
                <table role="presentation" class="email-container">
                    <!-- Header -->
                    <tr>
                        <td class="header">
                            <p class="logo"><span class="light">Hire</span><strong>Heaven</strong></p>
                            <div class="header-icon">&#128274;</div>
                            <h1>Reset Your Password</h1>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td class="content">
                            <p class="text">Hi there,</p>
                            <p class="text">
                                We received a request to reset the password for your HireHeaven account. Click the button below to choose a new one:
                            </p>

                            <!-- Button -->
                            <div class="button-wrapper">
                                <a href="${resetLink}" class="button">Reset Password</a>
                            </div>

                            <p class="text-muted">
                                Or copy and paste this link into your browser:
                            </p>
                            <p class="link-box">${resetLink}</p>

                            <p class="warning">
                                &#9201; This link will expire in 15 minutes for security reasons.
                            </p>

                            <hr class="divider" />

                            <p class="text-muted">
                                If you didn't request a password reset, you can safely ignore this email, your password will remain unchanged.
                            </p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td class="footer">
                            <p class="footer-text">
                                &copy; ${new Date().getFullYear()} HireHeaven. All rights reserved.
                            </p>
                            <p class="footer-text">
                                This is an automated message, please do not reply.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
};
