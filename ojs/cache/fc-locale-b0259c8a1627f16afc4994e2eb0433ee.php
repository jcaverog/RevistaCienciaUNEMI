<?php return array (
  'emails.manualPaymentNotification.subject' => 'Notificación de pago manual',
  'emails.manualPaymentNotification.body' => 'Un pago manual necesita ser procesado para la revista  {$contextName} y el usuario {$userFullName} (username &quot;{$userName}&quot;).<br />
<br />
El ítem pagado es &quot;{$itemName}&quot;.<br />
El precio es {$itemCost} ({$itemCurrencyCode}).<br />
<br />
Este correo ha sido generado por el módulo de Pago Manual de Open Journal Systems.',
  'emails.manualPaymentNotification.description' => 'Este correo electrónico se usa para notificar al gestor/a de la revista de que se ha solicitado un pago manual.',
);