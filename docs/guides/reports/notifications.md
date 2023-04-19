---
sidebar_position: 2
tags:
  - reports
  - custodial
  - non-custodial
---

# Notifications

Once a report is generated, Immersve will send a notification to a webhook that you provide. The notification will contain a URL to access your report.

## Schema
|  Field   |                         Description                         |
| -------- | ----------------------------------------------------------- |
| reportId | Unique identifier of the Report.                            |
| url      | URL to access the Report. The URL will be valid for 7 days. |