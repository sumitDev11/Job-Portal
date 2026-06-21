const statusStyles: Record<string, { bg: string; color: string; label: string }> = {
  accepted: { bg: "#dcfce7", color: "#16a34a", label: "Accepted" },
  rejected: { bg: "#fee2e2", color: "#dc2626", label: "Rejected" },
  pending: { bg: "#dbeafe", color: "#2563eb", label: "Pending" },
};

export const applicationStatusUpdateTemplate = (
  jobTitle: string,
  status?: string
) => {
  const normalizedStatus = status?.toLowerCase();
  const badge = statusStyles[normalizedStatus || ""] || statusStyles.pending;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application Status Update</title>
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
        .job-card {
            margin: 0 0 22px;
            padding: 18px 20px;
            background-color: #eff6ff;
            border-left: 4px solid #2563eb;
            border-radius: 6px;
        }
        .job-title {
            margin: 0 0 8px;
            color: #1e293b;
            font-size: 17px;
            font-weight: 700;
        }
        .status-badge {
            display: inline-block;
            padding: 6px 14px;
            border-radius: 999px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.03em;
            background-color: ${badge.bg};
            color: ${badge.color};
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
                            <div class="header-icon">&#128188;</div>
                            <h1>Application Status Update</h1>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td class="content">
                            <p class="text">Hi there,</p>
                            <p class="text">
                                There's an update on your job application. Here are the details:
                            </p>

                            <div class="job-card">
                                <p class="job-title">${jobTitle}</p>
                                <span class="status-badge">${badge.label}</span>
                            </div>

                            <p class="text-muted">
                                You can check the full details of your application anytime by signing in to your HireHeaven account.
                            </p>

                            <hr class="divider" />

                            <p class="text-muted">
                                Thank you for applying through HireHeaven, we wish you the best of luck!
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
