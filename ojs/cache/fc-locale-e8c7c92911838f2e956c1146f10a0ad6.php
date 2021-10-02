<?php return array (
  'emails.paypalInvestigatePayment.subject' => 'Actividad inusual de PayPal',
  'emails.paypalInvestigatePayment.body' => 'Open Journal Systems ha detectado una actividad inusual relacionada con el soporte de pago por PayPal de la revista {$contextName}. Esta actividad podría requerir una investigación más detallada o una intervención manual<br />
                       <br />
Este correo electrónico ha sido generado por el módulo de PayPal de Open Journal Systems.<br />
<br />
Información completa de envío para la solicitud:<br />
{$postInfo}<br />
<br />
Información adicional (si se proporciona):<br />
{$additionalInfo}<br />
<br />
Variables de servidor:<br />
{$serverVars}<br />
',
  'emails.paypalInvestigatePayment.description' => 'Esta plantilla de correo es usada para notificar al contacto principal de la revista de que el plugin de PayPal ha detectado actividad sospechosa o actividad que requiere de intervención manual.',
);