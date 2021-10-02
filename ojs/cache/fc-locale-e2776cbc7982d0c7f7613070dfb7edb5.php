<?php return array (
  'emails.notification.subject' => 'Nueva notificación desde {$siteTitle}',
  'emails.notification.body' => 'Tiene una nueva notificación desde {$siteTitle}:<br />
<br />
{$notificationContents}<br />
<br />
Enlace: {$url}<br />
<br />
{$principalContactSignature}',
  'emails.notification.description' => 'El correo electrónico se envía a usuarios/as registrados que hayan seleccionado recibir este tipo de notificación.',
  'emails.passwordResetConfirm.subject' => 'Confirmación de cambio de contraseña',
  'emails.passwordResetConfirm.body' => 'Hemos recibido una petición para cambiar su contraseña en {$siteTitle}.<br />
<br />
Si no hizo usted esta petición ignore este correo-e y su contraseña no cambiará. Si desea cambiar su contraseña pinche en el enlace que le mostramos a continuación.<br />
<br />
Cambiar mi contraseña: {$url}<br />
<br />
{$principalContactSignature}',
  'emails.passwordResetConfirm.description' => 'Este correo se envía a un/a usuario/a registrado/a cuando indican que han olvidado su contraseña o que no se pueden identificar. Proporciona una URL para que cambien su contraseña.',
  'emails.passwordReset.subject' => 'Cambio de contraseña',
  'emails.passwordReset.body' => 'Su contraseña en {$siteTitle} se ha cambiado sin problema. Por favor, guarde en lugar seguro su nombre de usuaria/o y contraseña, ya que son necesarios para trabajar con la revista.<br />
<br />
Nombre de usuaria/o: {$username}<br />
Contraseña: {$password}<br />
<br />
{$principalContactSignature}',
  'emails.passwordReset.description' => 'Este correo se envía a un/a usuario/a registrado/a una vez han cambiado su contraseña siguiendo el procedimiento descrito en el correo-e PASSWORD_RESET_CONFIRM.',
  'emails.userRegister.subject' => 'Nuevo registro de usuaria/o',
  'emails.userRegister.body' => '{$userFullName}<br />
<br />
Se ha registrado con éxito como usuario/a en {$contextName}. En este correo se incluyen su nombre de usuario/a y contraseña, datos necesarios para realizar cualquier tarea relacionada con la revista a través de la página web. En cualquier momento puede solicitar que se le elimine de la lista de usuarios/as de la revista contactándome.<br />
<br />
Nombre de usuario/a: {$username}<br />
Contraseña: {$password}<br />
<br />
Gracias,<br />
{$principalContactSignature}',
  'emails.userRegister.description' => 'Este correo se envía a un/a usuario/a que se acaba de registrar para darle la bienvenida al sistema y proporcionarle sus datos de acceso.',
  'emails.userValidate.subject' => 'Activación de cuenta',
  'emails.userValidate.body' => 'Estimado/a {$userFullName}<br />
<br />
Ha creado una cuenta de usuario/a en {$contextName}, pero antes de poder utilizarla debe validar su correo electrónico. Para ello, simplemente haga clic en el siguiente enlace:<br />
<br />
{$activateUrl}<br />
<br />
Gracias,<br />
{$principalContactSignature}',
  'emails.userValidate.description' => 'Este correo electrónico se envía a los usuarios/as recién registrados para que validen su cuenta de correo.',
  'emails.reviewerRegister.subject' => 'Revisor para {$contextName}',
  'emails.reviewerRegister.body' => 'A la vista de su trayectoria profesional, su nombre ha sido propuesto para figurar como revisor potencial en el sistema de gestión electrónica de artículos de la revista {$contextName}, sin que ello implique ningún compromiso por su parte y pudiendo dejar de formar parte de esta lista cuando lo desee. Únicamente nos posibilita poder enviarle artículos para una eventual revisión por su parte. En caso de estar conforme con actuar como revisor para la revista, podrá recibir solicitudes de revisión de artículos, y aceptar o rechazar dichas solicitudes en su momento.<br />
<br />
A continuación le enviamos un nombre de usuario/a y contraseña con los que podrá acceder al sistema de gestión de envíos de la revista, donde además podrá indicarnos los temas que le son de interés como revisor.<br />
<br />
Username: {$username}<br />
Password: {$password}<br />
<br />
Agradecidos por su atención, reciba un cordial saludo,<br />
{$principalContactSignature}',
  'emails.reviewerRegister.description' => 'Este email se envía a los nuevos revisores para darles la bienvenida al sistema y proporcionarles sus datos de acceso.',
  'emails.publishNotify.subject' => 'Nuevo número publicado',
  'emails.publishNotify.body' => 'Estimados/as lectores/as:<br />
<br />
{$contextName} acaba de publicar su último número en {$contextUrl}. A continuación le mostramos la tabla de contenidos, después puede visitar nuestro sitio web para consultar los artículos que sean de su interés.<br />
<br />
Gracias por mantener el interés en nuestro trabajo,<br />
{$editorialContactSignature}',
  'emails.publishNotify.description' => 'Este correo se envía a lectores/as registrados/as a través del enlace "Notificar a usuarios/as" en la página principal de los editores/as. Notifica a los/as lectores/as de la aparición de un nuevo número y les invita a visitar la revista en la URL proporcionada.',
  'emails.lockssExistingArchive.subject' => 'Petición de archivado para {$contextName}',
  'emails.lockssExistingArchive.body' => 'Estimado/a [Bibliotecaria/o Universitaria/o]<br />
<br />
{$contextName} &amp;lt;{$contextUrl}&amp;gt;, es una revista en la que un miembro de su Facultad/Universidad, [nombre de la persona], colabora como [cargo que desempeña]. La revista está intentando crear un archivo LOCKSS (Lots of Copies Keep Stuff Safe) con esta y otras bibliotecas universitarias.<br />
<br />
[Breve descripción de la revista]<br />
<br />
La URL para el Manifiesto Editorial LOCKSS para nuestra revista es: {$contextUrl}/gateway/lockss<br />
<br />
Entendemos que ya está participando en LOCKSS. Si podemos proporcionarle metadatos adicionales para registrar nuestra revista con su versión de LOCKSS, estaremos encantados/as de hacerlo.<br />
<br />
Gracias,<br />
{$principalContactSignature}',
  'emails.lockssExistingArchive.description' => 'Este correo solicita al / a la administrador/a de un archivo LOCKSS que tenga en cuenta esta revista para incluirla en su archivo. Proporciona la URL del Manifiesto Editorial LOCKSS de la revista.',
  'emails.lockssNewArchive.subject' => 'Petición de archivado para {$contextName}',
  'emails.lockssNewArchive.body' => 'Estimado/a [Bibliotecario/a Universitario/a]<br />
<br />
{$contextName} &amp;lt;{$contextUrl}&amp;gt;, es una revista en la que un miembro de su Facultad/Universidad, [nombre de la persona], colabora como [cargo que desempeña]. La revista está intentando crear un archivo LOCKSS (Lots of Copies Keep Stuff Safe) con esta y otras bibliotecas universitarias.<br />
<br />
[Breve descripción de la revista]<br />
<br />
El programa LOCKSS &amp;lt;http://lockss.org/&amp;gt;, una iniciativa internacional de bibliotecas y editoriales, es un ejemplo vivo de un repositorio de preservación y archivo distribuido, a continuación le mostramos más detalles. El software, que funciona en ordenadores personales normales es gratuito; el sistema se conecta fácilmente; necesitando muy poco mantenimiento.<br />
<br />
Para contribuir al archivado de nuestra revista, le invitamos a convertirse en miembro de la comunidad LOCKSS, y así ayudar a recopilar y preservar títulos producidos en nuestra facultad y por otras entidades académicas de todo el mundo. Para hacerlo le rogamos que alguna persona de su biblioteca visite el sitio de LOCKSS para saber cómo funciona este sistema. Espero recibir pronto noticias suyas en el sentido de que proporcionará el apoyo para poder archivar esta revista.<br />
<br />
Gracias,<br />
{$principalContactSignature}',
  'emails.lockssNewArchive.description' => 'Este correo solicita al / a la destinatario/a participar en la iniciativa LOCKSS e incluir esta revista en el archivo. Le proporciona información sobre la iniciativa LOCKSS y cómo participar.',
  'emails.submissionAck.subject' => 'Acuse de recibo del envío',
  'emails.submissionAck.body' => '{$authorName}:<br />
<br />
Gracias por enviar el manuscrito &quot;{$submissionTitle}&quot; a {$contextName}. Con el sistema de gestión de publicaciones en línea que utilizamos podrá seguir el progreso a través del proceso editorial tras iniciar sesión en el sitio web de la publicación:<br />
<br />
URL del manuscrito: {$submissionUrl}<br />
Nombre de usuario/a: {$authorUsername}<br />
<br />
Si tiene alguna duda puede ponerse en contacto conmigo. Gracias por elegir esta editorial para mostrar su trabajo.<br />
<br />
{$editorialContactSignature}',
  'emails.submissionAck.description' => 'Este correo electrónico, si está activado, se envía automáticamente a un autor/a cuando completa el proceso de envío de un manuscrito a la editorial. Proporciona información sobre el seguimiento del envío en el proceso y agradece al autor/a el envío.',
  'emails.submissionAckNotUser.subject' => 'Acuse de recibo del envío',
  'emails.submissionAckNotUser.body' => 'Hola,<br />
<br />
{$submitterName} ha enviado el manuscrito &quot;{$submissionTitle}&quot; a {$contextName}. <br />
<br />
Si tiene cualquier pregunta no dude en contactarme. Le agradecemos que haya elegido esta revista para dar a conocer su obra.<br />
<br />
{$editorialContactSignature}',
  'emails.submissionAckNotUser.description' => 'Este correo electrónico, si está activado, se envía automáticamente a los autores/as que no son usuarios/as del OJS especificado durante el proceso de envío.',
  'emails.editorAssign.subject' => 'Asignación editorial',
  'emails.editorAssign.body' => '{$editorialContactName}:<br />
<br />
Se le ha asignado el envío, &quot;{$submissionTitle},&quot; a {$contextName} para que lo revise en el proceso editorial como Editor/a de Sección.<br />
<br />
URL del envío: {$submissionUrl}<br />
Usuario/a: {$editorUsername}<br />
<br />
Gracias.',
  'emails.editorAssign.description' => 'Este correo notifica al / a la Editor/a de Sección de que les ha asignado la tarea de supervisar un envío a través del proceso editorial. Proporciona información sobre el envío y cómo acceder a la revista.',
  'emails.reviewRequest.subject' => 'Solicitud de revisión de artículo',
  'emails.reviewRequest.body' => '{$reviewerName}:<br />
<br />
Tengo el convencimiento de que sería un excelente revisor/a del manuscrito, &quot;{$submissionTitle},&quot; que ha sido enviado a {$contextName}. A continuación encontrará el resumen del envío, con la esperanza de que aceptará llevar a cabo esta importante tarea para nosotros.<br />
<br />
Por favor, inicie sesión en la página web de la revista antes del {$responseDueDate} para indicarnos si llevará a cabo o no la revisión, así como para tener acceso al envío y para registrar su revisión y recomendación. La dirección es {$contextUrl}<br />
<br />
La revisión propiamente dicha debería estar lista el {$reviewDueDate}.<br />
<br />
Si no recuerda su nombre de usuaria/o y contraseña, puede utilizar este enlace para restablecer su contraseña (esta le será enviada por correo electrónico junto con su nombre de usuario/a). {$passwordResetUrl}<br />
<br />
URL del envío: {$submissionReviewUrl}<br />
<br />
Gracias por considerar nuestra solicitud.<br />
<br />
{$editorialContactSignature}<br />
<br />
&quot;{$submissionTitle}&quot;<br />
<br />
{$submissionAbstract}',
  'emails.reviewRequest.description' => 'Este correo electrónico del editor/a de sección se dirige a un revisor/a para solicitarle que acepte o rechace la tarea de revisión de un envío. El correo proporciona información sobre el envío, como el título y el resumen, el plazo de revisión y cómo acceder al envío propiamente dicho. Este mensaje se usa cuando se selecciona el proceso de revisión estándar en Gestión > Ajustes > Flujo de trabajo > Revisión. (Si no consulte REVIEW_REQUEST_ATTACHED.)',
  'emails.reviewRequestRemindAuto.subject' => 'Recordatorio de solicitud de revisión de artículo',
  'emails.reviewRequestRemindAuto.body' => '{$reviewerName}:<br />
Le recordamos nuestra petición acerca de la revisión del envío &quot;{$submissionTitle},&quot; para {$contextName}. Esperábamos tener esta revisión como muy tarde el {$responseDueDate}, por lo cual este correo electrónico se ha generado automáticamente y se ha enviado una vez pasada dicha fecha.
<br />
El resumen del envío se ha insertado a continuación. Creemos que sería un excelente revisor para este artículo, por lo que esperamos que reconsidere llevar a cabo esta importante tarea para nosotros.<br />
<br />
Por favor, ingrese en la página web de la revista para indicar si realizará o no la revisión, y en caso afirmativo para acceder al envío y registrar su revisión y su recomendación. El sitio web es {$contextUrl}<br />
<br />
La fecha límite para la revisión es el {$reviewDueDate}.<br />
<br />
Si no dispone de un nombre de usuario/a y contraseña para el sitio web de la revista, puede hacer clic en este enlace para restablecer su contraseña (se la enviaremos junto con su nombre de usuario/a). {$passwordResetUrl}<br />
<br />
URL del envío: {$submissionReviewUrl}<br />
<br />
Gracias por considerar esta petición.<br />
<br />
{$editorialContactSignature}<br />
<br />
&quot;{$submissionTitle}&quot;<br />
<br />
{$submissionAbstract}',
  'emails.reviewRequestRemindAuto.description' => 'Este correo electrónico se envía automáticamente cuando transcurre la fecha de entrega del revisor/a (vea las opciones de revisión en el paso 2 de la configuración de la revista) y se deshabilita el acceso al revisor/a con un solo clic. Las tareas planificadas se deben habilitar y configurar (vea el archivo de configuración del sitio).',
  'emails.reviewRequestOneclick.subject' => 'Petición de revisión de artículo',
  'emails.reviewRequestOneclick.body' => '{$reviewerName}:<br />
<br />
Tengo el convencimiento de que sería un/a excelente revisor/a del manuscrito &quot;{$submissionTitle},&quot; que ha sido enviado a {$contextName}. A continuación encontrará un extracto del envío, con la esperanza de que aceptará llevar a cabo esta importante tarea para nosotros.<br />
<br />
Por favor, identifíquese en la revista antes de {$responseDueDate} para decirnos si hará o no la revisión, así como para tener acceso al envío y para registrar su revisión y recomendación.<br />
<br />
La revisión propiamente dicha debe estar lista para el {$reviewDueDate}.<br />
<br />
URL del envío: {$submissionReviewUrl}<br />
<br />
Gracias por tener en cuenta nuestra solicitud.<br />
<br />
{$editorialContactSignature}<br />
<br />
&quot;{$submissionTitle}&quot;<br />
<br />
{$submissionAbstract}',
  'emails.reviewRequestOneclick.description' => 'Este correo del / de la Editor/a de Sección a un/a revisor/a le solicita que acepte o rechace la revisión de un envío. Proporciona información sobre el envío como el título y el resumen, el plazo de revisión, y cómo acceder al envío propiamente dicho. Este mensaje se usa cuando se selecciona el Proceso de Envío Estándar en la configuración de la revista, paso 2, y está activado el acceso a la revisión en un click.',
  'emails.reviewRequestRemindAutoOneclick.subject' => 'Solicitud de revisión de artículo',
  'emails.reviewRequestRemindAutoOneclick.body' => '{$reviewerName}:<br />
Le recordamos nuestra petición acerca de la revisión del envío &quot;{$submissionTitle},&quot; para {$contextName}. Esperábamos tener esta revisión como muy tarde el {$responseDueDate}, por lo cual este correo electrónico se ha generado automáticamente y se ha enviado una vez pasada dicha fecha.
<br />
El resumen del envío se ha insertado a continuación. Creemos que sería un excelente revisor para este artículo, por lo que esperamos que reconsidere llevar a cabo esta importante tarea para nosotros.<br />
<br />
Por favor, ingrese en la página web de la revista para indicar si realizará o no la revisión, y en caso afirmativo para acceder al envío y registrar su revisión y su recomendación. <br />
<br />
La fecha límite para la revisión es el {$reviewDueDate}.<br />
<br />
URL del envío: {$submissionReviewUrl}<br />
<br />
Gracias por considerar esta petición.<br />
<br />
{$editorialContactSignature}<br />
<br />
&quot;{$submissionTitle}&quot;<br />
<br />
{$submissionAbstract}',
  'emails.reviewRequestRemindAutoOneclick.description' => 'Este correo electrónico se envía automáticamente cuando transcurre la fecha de entrega del revisor/a (vea las opciones de revisión en el paso 2 de la configuración de la revista) y se habilita el acceso al revisor/a con un solo clic. Las tareas planificadas se deben habilitar y configurar (vea el archivo de configuración del sitio).',
  'emails.reviewRequestAttached.subject' => 'Petición de revisión de artículo',
  'emails.reviewRequestAttached.body' => '{$reviewerName}:<br />
<br />
Tengo el convencimiento de que sería un/a excelente revisor/a del manuscrito &quot;{$submissionTitle},&quot;. A continuación encontrará un extracto del envío, con la esperanza de que aceptará llevar a cabo esta importante tarea para nosotros. A continuación le mostramos las Normas de Revisión de esta revista y adjunto a este correo-e recibirá el envío. Debería enviarme por correo-e su revisión del envío, así como su recomendación antes del {$reviewDueDate}.<br />
<br />
Le ruego me conteste a este correo-e antes del {$responseDueDate} y me comunique si puede y quiere hacer la revisión.<br />
<br />
Gracias por tener en cuenta esta solicitud.<br />
<br />
{$editorialContactSignature}<br />
<br />
<br />
Normas de Revisión<br />
<br />
{$reviewGuidelines}<br />
',
  'emails.reviewRequestAttached.description' => 'Este correo electrónico del editor/a de sección se dirige a un revisor/a para solicitarle que acepte o rechace la tarea de revisión de un envío. El correo incluye el envío como adjunto. Este mensaje se usa cuando se selecciona el proceso de revisión de adjunto de correo en Gestión > Ajustes > Flujo de trabajo > Revisión. (Si no consulte REVIEW_REQUEST.)',
  'emails.reviewRequestSubsequent.subject' => 'Solicitud de revisión de artículo',
  'emails.reviewRequestSubsequent.body' => '{$reviewerName}:<br />
<br />
Este correo es en referencia al manuscrito &quot;{$submissionTitle},&quot;, que {$contextName} está considerando.<br />
<br />
Después de la revisión de la versión previa del manuscrito, los autores/as han enviado una versión revisada de su artículo. Le agradeceríamos mucho si pudiera ayudarnos a evaluarla.<br />
<br />
Inicie sesión en el sitio web de la revista antes del {$responseDueDate} para indicar si llevará a cabo la revisión o no, además de para obtener acceso al envío y registrar su revisión y recomendación. El sitio web es {$contextUrl}<br />
<br />
La fecha límite para entregar la revisión es el {$reviewDueDate}.<br />
<br />
Si no dispone de un nombre de usuario/a y contraseña para el sitio web de la revista, puede hacer clic en este enlace para restablecer su contraseña (se la enviaremos junto con su nombre de usuario/a). {$passwordResetUrl}<br />
<br />
URL del envío: {$submissionReviewUrl}<br />
<br />
Gracias por considerar esta solicitud.<br />
<br />
{$editorialContactSignature}<br />
<br />
&quot;{$submissionTitle}&quot;<br />
<br />
{$submissionAbstract}',
  'emails.reviewRequestSubsequent.description' => 'Este correo electrónico del editor/a de sección a un revisor/a solicita que el revisor/a acepte o rechace la tarea de revisar un envío para una ronda de revisión adicional. Además, proporciona información sobre el envío como el título, el resumen, la fecha de entrega de la revisión y cómo obtener acceso al propio envío. Este mensaje se usa cuando se selecciona el proceso de revisión estándar en Gestión > Ajustes > Flujo de trabajo > Revisión. (Por lo demás, vea REVIEW_REQUEST_ATTACHED_SUBSEQUENT.)',
  'emails.reviewRequestOneclickSubsequent.subject' => 'Solicitud de revisión de artículo',
  'emails.reviewRequestOneclickSubsequent.body' => '{$reviewerName}:<br />
<br />
Este correo es en referencia al manuscrito &quot;{$submissionTitle},&quot;, que {$contextName} está considerando.<br />
<br />
Después de la revisión de la versión previa del manuscrito, los autores/as han enviado una versión revisada de su artículo. Le agradeceríamos mucho si pudiera ayudarnos a evaluarla.<br />
<br />
Inicie sesión en el sitio web de la revista antes del {$responseDueDate} para indicar si llevará a cabo la revisión o no, además de para obtener acceso al envío y registrar su revisión y recomendación.<br />
<br />
La fecha límite para entregar la revisión es el {$reviewDueDate}.<br />
<br />
URL del envío: {$submissionReviewUrl}<br />
<br />
Gracias por considerar esta solicitud.<br />
<br />
{$editorialContactSignature}<br />
<br />
&quot;{$submissionTitle}&quot;<br />
<br />
{$submissionAbstract}',
  'emails.reviewRequestOneclickSubsequent.description' => 'Este correo electrónico del editor/a de sección a un revisor/a solicita que el revisor/a acepte o rechace la tarea de revisar un envío para una ronda de revisión adicional. Además, proporciona información sobre el envío como el título, el resumen, la fecha de entrega de la revisión y cómo obtener acceso al propio envío. Este mensaje se usa cuando se selecciona el proceso de revisión estándar en el paso 2 de la configuración de la revista y cuando se habilita el acceso al revisor/a con un solo clic.',
  'emails.reviewRequestAttachedSubsequent.subject' => 'Solicitud de revisión de artículo',
  'emails.reviewRequestAttachedSubsequent.body' => '{$reviewerName}:<br />
<br />
Este correo es en referencia al manuscrito &quot;{$submissionTitle},&quot;, que {$contextName} está considerando.<br />
<br />
Después de la revisión de la versión previa del manuscrito, los autores/as han enviado una versión revisada de su artículo. Le agradeceríamos mucho si pudiera ayudarnos a evaluarla.<br />
<br />
Las normas de revisión de esta revista se pueden ver a continuación. Además, el artículo se adjunta en este correo electrónico. Debería enviarnos su revisión del envío, junto con su recomendación, antes del {$reviewDueDate}.<br />
<br />
Por favor, responda a este correo electrónico antes del {$responseDueDate} e indíquenos si puede y desea realizar esta revisión.<br />
<br />
Gracias por considerar esta solicitud.<br />
<br />
{$editorialContactSignature}<br />
<br />
<br />
Normas de revisión<br />
<br />
{$reviewGuidelines}<br />
',
  'emails.reviewRequestAttachedSubsequent.description' => 'El editor de sección envía este correo electrónico a un revisor para pedirle si acepta o rechaza la tarea de revisión de un artículo en segunda ronda. Este incluye el envío como adjunto. Este mensaje se usa cuando se selecciona el proceso de revisión de archivos adjuntos por correo electrónico en el paso 2 de la configuración de la revista. (Por lo demás, vea SOLICITUD_DE_REVISIÓN_POSTERIOR.)',
  'emails.reviewCancel.subject' => 'Petición de revisión cancelada',
  'emails.reviewCancel.body' => '{$reviewerName}:<br />
<br />
Hemos decidido cancelar nuestra petición para que revisara el envío &quot;{$submissionTitle},&quot; para {$contextName}. Lamentamos las molestias que hayamos podido causarle y esperamos poder volver a contactar con usted en el futuro para que nos ayude en el proceso de revisión.<br />
<br />
Si tiene cualquier pregunta, no dude en contactar con nosotros/as.',
  'emails.reviewCancel.description' => 'Este correo del / de la Editor/a de Sección a un/a Revisor/a que tiene la revisión de un envío en progreso para notificarles que la revisión se ha cancelado.',
  'emails.reviewConfirm.subject' => 'Acepto la revisión',
  'emails.reviewConfirm.body' => 'Editores/as:<br />
<br />
Tengo la capacidad y deseo revisar el envío &quot;{$submissionTitle},&quot; para {$contextName}. Gracias por acordarse de mí, es mi intención tener la revisión completa en el plazo indicado: {$reviewDueDate}, a ser posible antes.<br />
<br />
{$reviewerName}',
  'emails.reviewConfirm.description' => 'Este correo es enviado por un/a revisor/a al / a la Editor/a de Sección en respuesta a una petición de revisión para notificarle que ha aceptado la petición y que será completada antes de la fecha especificada.',
  'emails.reviewDecline.subject' => 'Rechazo la revisión',
  'emails.reviewDecline.body' => 'Editores/as:<br />
<br />
Me temo que en este momento no voy a poder revisar el envío &quot;{$submissionTitle},&quot; para {$contextName}. Gracias por pensar en mí, espero que vuelvan a contar conmigo en futuras ocasiones.<br />
<br />
{$reviewerName}',
  'emails.reviewDecline.description' => 'Este correo es enviado por un/a revisor/a al / a la Editor/a de Sección en respuesta a una petición de revisión para notificarle que rechaza la petición de revisión.',
  'emails.reviewAck.subject' => 'Acuse de recibo de revisión de artículo',
  'emails.reviewAck.body' => '{$reviewerName}:<br />
<br />
Gracias por completar la revisión del envío &quot;{$submissionTitle},&quot; para {$contextName}. Apreciamos su contribución a la calidad de los trabajos que publicamos.',
  'emails.reviewAck.description' => 'Este correo enviado por el/la Editor/a de Sección para confirmar la recepción de una revisión completada y agradecer al / a la revisor/a su contribución.',
  'emails.reviewRemind.subject' => 'Recordatorio de envío de revisión',
  'emails.reviewRemind.body' => '{$reviewerName}:<br />
<br />
Le recordamos nuestra petición de revisión del envío &quot;{$submissionTitle},&quot; para {$contextName}. Esperábamos su revisión antes del {$reviewDueDate}, esperamos nos la mande en cuanto la tenga lista.<br />
<br />
Si ha perdido su nombre de usuaria/o y contraseña para la revista puede pinchar en el siguiente enlace para cambiar su contraseña (se la enviaremos por correo-e junto con su nombre de usuaria/o). {$passwordResetUrl}<br />
<br />
URL del envío: {$submissionReviewUrl}<br />
<br />
Le rogamos nos confirme su disponibilidad para completar esta contribución vital para el trabajo de la revista. Esperamos tener noticias suyas a la mayor brevedad.<br />
<br />
{$editorialContactSignature}',
  'emails.reviewRemind.description' => 'Este correo es enviado por el/la Editor/a de Sección para recordar a un/a revisor/a que ya debe entregar su revisión.',
  'emails.reviewRemindOneclick.subject' => 'Recordatorio de envío de revisión',
  'emails.reviewRemindOneclick.body' => '{$reviewerName}:<br />
<br />
Le recordamos nuestra petición de revisión del envío &quot;{$submissionTitle},&quot; para {$contextName}. Esperábamos su revisión antes del {$reviewDueDate}, esperamos nos la mande en cuanto la tenga lista.<br />
<br />
URL del envío: {$submissionReviewUrl}<br />
<br />
Le rogamos nos confirme su disponibilidad para completar esta contribución vital para el trabajo de la revista. Esperamos tener noticias suyas a la mayor brevedad.<br />
<br />
{$editorialContactSignature}',
  'emails.reviewRemindOneclick.description' => 'Este correo es enviado por el/la Editor/a de Sección para recordar a un/a revisor/a que ya debe entregar su revisión.',
  'emails.reviewRemindAuto.subject' => 'Recordatorio automático de revisión de envío',
  'emails.reviewRemindAuto.body' => '{$reviewerName}:<br />
<br />
Le recordamos nuestra petición de revisión del envío &quot;{$submissionTitle},&quot; para {$contextName}. Esperábamos su revisión antes del {$reviewDueDate}, y se ha generado automáticamente este correo-e al haberse superado dicha fecha. Aún estaríamos encantados de recibirla una vez la tenga lista.<br />
<br />
Si ha perdido su nombre de usuaria/o y contraseña para la revista puede pinchar en el siguiente enlace para cambiar su contraseña (se la enviaremos por correo-e junto con su nombre de usuaria/o). {$passwordResetUrl}<br />
<br />
URL del envío: {$submissionReviewUrl}<br />
<br />
Le rogamos nos confirme su disponibilidad para completar esta contribución vital para el trabajo de la revista. Esperamos tener noticias suyas a la mayor brevedad.<br />
<br />
{$editorialContactSignature}',
  'emails.reviewRemindAuto.description' => 'Este correo es enviado automáticamente cuando se supera la fecha de entrega de un/a revisor/a (véase Opciones de Revisión en Configuración de la revista, paso 2). Las tareas planificadas deben estar activadas y configuradas (ver fichero de configuración del sitio).',
  'emails.reviewRemindAutoOneclick.subject' => 'Recordatorio automático de revisión de envío',
  'emails.reviewRemindAutoOneclick.body' => '{$reviewerName}:<br />
<br />
Le recordamos nuestra petición de revisión del envío &quot;{$submissionTitle},&quot; para {$contextName}. Esperábamos su revisión antes del {$reviewDueDate}, y se ha generado automáticamente este correo-e al haberse superado dicha fecha. Aún estaríamos encantados de recibirla una vez la tenga lista.<br />
<br />
URL del envío: {$submissionReviewUrl}<br />
<br />
Le rogamos nos confirme su disponibilidad para completar esta contribución vital para el trabajo de la revista. Esperamos tener noticias suyas a la mayor brevedad.<br />
<br />
{$editorialContactSignature}',
  'emails.reviewRemindAutoOneclick.description' => 'Este correo electrónico se envía automáticamente cuando transcurre la fecha de vencimiento del revisor (consulte Opciones de revisión en Configuración > Flujo de trabajo> Revisar) y cuando se habilita el acceso de revisor con un clic. Las tareas programadas deben estar habilitadas y configuradas (consulte el archivo de configuración del sitio).',
  'emails.editorDecisionAccept.subject' => 'Decisión del editor/a',
  'emails.editorDecisionAccept.body' => '{$authorName}:<br />
<br />
Hemos tomado una decisión sobre su envío en {$contextName}, &quot;{$submissionTitle}&quot;.<br />
<br />
Nuestra decisión es: Aceptar el envío',
  'emails.editorDecisionAccept.description' => 'Este correo electrónico del editor/a o editor/a de sección para el autor/a le notifica que la decisión final es aceptar su envío .',
  'emails.editorDecisionSendToExternal.subject' => 'Decisión del editor/a',
  'emails.editorDecisionSendToExternal.body' => '{$authorName}:<br />
<br />
Hemos llegado a una decisión respecto a su envío {$contextName}, &quot;{$submissionTitle}&quot;.<br />
<br />
Nuestra decisión es: Enviar a revisión<br />
<br />
Enlace: {$submissionUrl}',
  'emails.editorDecisionSendToExternal.description' => 'Este correo electrónico del editor/a, o del editor/a de sección, notifica al autor/a que su envío se traslada a un revisor/a externo.',
  'emails.editorDecisionSendToProduction.subject' => 'Decisión del editor/a',
  'emails.editorDecisionSendToProduction.body' => '{$authorName}:<br />
<br />
La edición de su envío, &quot;{$submissionTitle},&quot; se ha completado. Ahora lo enviaremos a producción.<br />
<br />
Submission URL: {$submissionUrl}',
  'emails.editorDecisionSendToProduction.description' => 'Este correo electrónico del editor/a, o del editor/a de sección, notifica al autor/a que su envío se traslada a producción.',
  'emails.editorDecisionRevisions.subject' => 'Decisión del editor/a',
  'emails.editorDecisionRevisions.body' => '{$authorName}:<br />
<br />
Hemos tomado una decisión sobre su envío en {$contextName}, &quot;{$submissionTitle}&quot;.<br />
<br />
Nuestra decisión es: Necesita revisiones',
  'emails.editorDecisionRevisions.description' => 'Este correo electrónico del editor/a o editor/a de sección al autor/a le notifica que la decisión final respecto a su envío es que "necesita revisiones".',
  'emails.editorDecisionResubmit.subject' => 'Decisión del editor/a',
  'emails.editorDecisionResubmit.body' => '{$authorName}:<br />
<br />
Hemos tomado una decisión sobre su envío en {$contextName}, &quot;{$submissionTitle}&quot;.<br />
<br />
Nuestra decisión es: Volver a enviar a revisión',
  'emails.editorDecisionResubmit.description' => 'Este correo electrónico del editor/a o editor/a de sección al autor/a le notifica sobre la decisión final de volver a revisar su envío.',
  'emails.editorDecisionDecline.subject' => 'Decisión del editor/a',
  'emails.editorDecisionDecline.body' => '{$authorName}:<br />
<br />
Hemos tomado una decisión sobre su envío en {$contextName}, &quot;{$submissionTitle}&quot;.<br />
<br />
Nuestra decisión es: Rechazar el envío',
  'emails.editorDecisionDecline.description' => 'Este correo electrónico del editor/a o editor/a de sección al autor/a le notifica sobre la decisión final de "rechazar" su envío.',
  'emails.editorRecommendation.subject' => 'Recomendación del editor/a',
  'emails.editorRecommendation.body' => '{$editors}:<br />
<br />
La recomendación respecto al envío a {$contextName}, &quot;{$submissionTitle}&quot; es: {$recommendation}',
  'emails.editorRecommendation.description' => 'Este correo electrónico del editor/a o editor/a de sección que aconseja para los editores/as o editores/as de sección que toman las decisiones les notifica sobre la recomendación final respecto al envío.',
  'emails.copyeditRequest.subject' => 'Petición de corrección',
  'emails.copyeditRequest.body' => '{$participantName}:<br />
<br />
Me gustaría pedirle que llevara a cabo la corrección de &quot;{$submissionTitle}&quot; para {$contextName}. Para hacerlo debería seguir los pasos siguientes:<br />
1. Haga clic en la URL del envío que encontrará al final de este correo.<br />
2. Abra todos los archivos disponibles en "Archivos borradores" y haga la corrección, añadiendo todos los comentarios que necesite en "Discusiones de corrección".<br />
3. Guarde los archivos corregidos y cárguelos en el panel "Corregidos".<br />
4. Notifique al editor/a que los archivos están listos y que el proceso de producción puede empezar.<br />
<br />
{$contextName} URL: {$contextUrl}<br />
URL del envío: {$submissionUrl}<br />
Nombre de usuario/a: {$participantUsername}',
  'emails.copyeditRequest.description' => 'Este correo es enviado por un/a Editor/a de Sección a un/a corrector/a de un envío para pedirles que comiencen un proceso de corrección. Le proporciona información sobre en el envío y cómo acceder a él.',
  'emails.layoutRequest.subject' => 'Solicitud de galeradas',
  'emails.layoutRequest.body' => '{$participantName}:<br />
<br />

El envío &quot;{$submissionTitle}&quot; a {$contextName} ahora necesita que prepare las galeradas siguiendo los siguientes pasos.<br />
1. Haga click en la URL del envío que hay a continuación.<br />
2. Entre a la revista con su usuario y utilice los ficheros preparados para publicación para crear las galeradas de acuerdo a los estándares de la revista.<br />
3. Suba las galeradas a la sección de ficheros de galerada.<br />
4. Notifique al Editor de que las galeradas están subidas y listas.<br />
<br />
{$contextName} URL: {$contextUrl}<br />
URL de envío: {$submissionUrl}<br />
Usuario: {$participantUsername}<br />
<br />
Si no puede llevar a cabo este trabajo en este momento o tiene cualquier pregunta, póngase en contacto con nosotros/as. Gracias por su contribución a la revista.',
  'emails.layoutRequest.description' => 'Este correo electrónico es enviado por el/ la Editor/a de Sección al / a la Editor/a de Maquetación notificándole que se les ha asignado la tarea de editar la maquetación de un envío. Le proporciona información sobre el envío y cómo acceder a él.',
  'emails.layoutComplete.subject' => 'Galeradas completadas',
  'emails.layoutComplete.body' => '{$editorialContactName}:<br />
<br />
Ya han sido preparadas las galeradas para el manuscrito &quot;{$submissionTitle},&quot; para {$contextName} y están listas para corregir.<br />
<br />
Si tiene cualquier pregunta, no dude en contactar con nosotros/as.<br />
<br />
{$participantName}',
  'emails.layoutComplete.description' => 'Este correo electrónico es enviado por el/la Editor/a de Maquetación al / a la Editor/a de Sección notificándole que el proceso de maquetación ha finalizado.',
  'emails.emailLink.subject' => 'Artículo interesante',
  'emails.emailLink.body' => 'He pensado que le podría interesar ver el artículo &quot;{$submissionTitle}&quot; de {$authorName}, publicado en el vol. {$volume}, nº {$number} ({$year}) de {$contextName} en &quot;{$articleUrl}&quot;.',
  'emails.emailLink.description' => 'Esta plantilla de correo proporciona a un/a lector/a registrado/a la oportunidad de enviar información sobre un artículo a alguien a quien le podría interesar. Está disponible a través de las Herramientas de Lectura y debe ser activado por el/la Gestor/a de la Revista en las Administración de Herramientas de Lectura.',
  'emails.subscriptionNotify.subject' => 'Notificación de suscripción',
  'emails.subscriptionNotify.body' => '{$subscriberName}:<br />
<br />
Acaba de registrarse como suscriptor/a en nuestro sistema de gestión de revistas online para la revista {$contextName}, a continuación le mostramos los datos de su suscripción:<br />
<br />
{$subscriptionType}<br />
<br />
Para acceder al contenido exclusivo para suscriptores/as, simplemente tiene que identificarse con su nombre de usuaria/o, &quot;{$username}&quot;.<br />
<br />
Una vez se haya identificado en el sistema puede cambiar los detalles de su perfil y su contraseña en cualquier momento.<br />
<br />
Tenga en cuenta que si se trata de una suscripción institucional no es necesario que los/as usuarios/as de su institución se identifiquen, ya que las peticiones de contenido bajo suscripción serán autentificadas automáticamente por el sistema.<br />
<br />
Si tiene cualquier pregunta no dude en contactar con nosotros/as.<br />
<br />
{$subscriptionContactSignature}',
  'emails.subscriptionNotify.description' => 'Este correo electrónico notifica a un/a lector/a registrado/a que el/la Gestor/a les ha creado una suscripción. Proporciona la URL de la revista junto con instrucciones para acceder a ella.',
  'emails.openAccessNotify.subject' => 'Ahora el número es de acceso libre',
  'emails.openAccessNotify.body' => 'Lectores:<br />
<br />
	{$contextName} acaba de hacer disponible de forma acceso libre el siguiente número. Los invitamos a revisar la Tabla de Contenido aquí y después visite nuestra página Web  ({$contextUrl}) para consultar los artículos que sean de su interés.<br />
<br />
	Gracias por mantener el interés en nuestro trabajo,<br />
	{$editorialContactSignature}',
  'emails.openAccessNotify.description' => 'Este correo electrónico se envía a los lectores/as registrados que han pedido recibir notificaciones por email cuando un número se vuelve de acceso libre.',
  'emails.subscriptionBeforeExpiry.subject' => 'Notificación de expiración de suscripción',
  'emails.subscriptionBeforeExpiry.body' => '{$subscriberName}:<br />
<br />
	Su suscripción a {$contextName} está a punto de expirar.<br />
<br />
	{$subscriptionType}<br />
	Fecha de expiración: {$expiryDate}<br />
<br />
	Para asegurarse de que continúa teniendo acceso a la revista entre en la página web de la revista y renueve su suscripción.  Puede acceder al sistema con su nombre de usuario/a, &quot;{$username}&quot;.<br />
<br />
	Si tiene cualquier pregunta no dude en contactarme.<br />
<br />
	{$subscriptionContactSignature}',
  'emails.subscriptionBeforeExpiry.description' => 'Este correo electrónico notifica al suscriptor que su subscripción va a expirar pronto.  También proporciona la dirección URL de la revista e instrucciones para acceder a la misma.',
  'emails.subscriptionAfterExpiry.subject' => 'Subscripción expirada',
  'emails.subscriptionAfterExpiry.body' => '{$subscriberName}:<br />
<br />
	Su subscripción a {$contextName} ha expirado.<br />
<br />
	{$subscriptionType}<br />
	Fecha de expiración: {$expiryDate}<br />
<br />
	Para renovar su suscripción entre en la página web de la revista.  Puede acceder al sistema con su nombre de usuario, &quot;{$username}&quot;.<br />
<br />
	Si tiene cualquier pregunta no dude en contactarme.<br />
<br />
	{$subscriptionContactSignature}',
  'emails.subscriptionAfterExpiry.description' => 'Este correo electrónico notifica al suscriptor que su subscripción ha expirado.  También proporciona la dirección URL de la revista con las instrucciones para acceder a la misma.',
  'emails.subscriptionAfterExpiryLast.subject' => 'Suscripción expirada - Último recordatorio',
  'emails.subscriptionAfterExpiryLast.body' => '{$subscriberName}:<br />
<br />
	Su suscripción a {$contextName} ha expirado.<br />
	Tenga en cuenta que este es el último correo que recibirá para recordárselo.<br />
<br />
	{$subscriptionType}<br />
	Fecha de expiración: {$expiryDate}<br />
<br />
	Para renovar su suscripción entre en la página web de la revista.  Puede acceder al sistema con su nombre de usuario/a, &quot;{$username}&quot;.<br />
<br />
	Si tiene cualquier pregunta no dude en contactarme.<br />
<br />
	{$subscriptionContactSignature}',
  'emails.subscriptionAfterExpiryLast.description' => 'Este correo electrónico notifica al suscriptor que su subscripción ha expirado.  También proporciona la dirección URL de la revista con las instrucciones para acceder a la misma.',
  'emails.subscriptionPurchaseIndl.subject' => 'Compra de suscripción: Individual',
  'emails.subscriptionPurchaseIndl.body' => 'Se ha adquirido en línea una suscripción individual para {$contextName} con los detalles siguientes:<br />
<br />
Tipo de suscripción:<br />
{$subscriptionType}<br />
<br />
Usuario/a:<br />
{$userDetails}<br />
<br />
Información de membresía (si se proporciona):<br />
{$membership}<br />
<br />
Para ver o editar esta suscripción, use la siguiente URL.<br />
<br />
URL de la suscripción: {$subscriptionUrl}<br />
',
  'emails.subscriptionPurchaseIndl.description' => 'Este correo electrónico notifica al administrador/a de suscripciones que una suscripción individual ha sido adquirida en línea. Proporciona un resumen de la información sobre la suscripción y un enlace de acceso rápido a la suscripción adquirida.',
  'emails.subscriptionPurchaseInstl.subject' => 'Compra de suscripción: Institucional',
  'emails.subscriptionPurchaseInstl.body' => 'Se ha adquirido en línea una suscripción institucional para {$contextName} con los siguientes detalles. Para activar la suscripción, use el enlace proporcionado y configure el estado de la suscripción como \'Activo\'.<br />
<br />
Tipo de suscripción:<br />
{$subscriptionType}<br />
<br />
Institución:<br />
{$institutionName}<br />
{$institutionMailingAddress}<br />
<br />
Dominio (si se proporciona):<br />
{$domain}<br />
<br />
Rangos de IP (si se proporcionan):<br />
{$ipRanges}<br />
<br />
Persona de contacto:<br />
{$userDetails}<br />
<br />
Información de membresía (si se proporciona):<br />
{$membership}<br />
<br />
Para ver o editar esta suscripción, use el siguiente enlace.<br />
<br />
Enlace de la suscripción: {$subscriptionUrl}<br />
',
  'emails.subscriptionPurchaseInstl.description' => 'Este correo electrónico notifica al administrador/a de suscripciones que una suscripción institucional ha sido adquirida en línea. Proporciona información resumida sobre la suscripción y un enlace de acceso rápido a la suscripción adquirida.',
  'emails.subscriptionRenewIndl.subject' => 'Renovación de suscripción: Individual',
  'emails.subscriptionRenewIndl.body' => 'Una suscripción individual ha sido renovada en línea para {$contextName} con los siguientes detalles.<br />
<br />
Tipo de suscripción:<br />
{$subscriptionType}<br />
<br />
Usuario/a:<br />
{$userDetails}<br />
<br />
Información de membresía (si se proporciona):<br />
{$membership}<br />
<br />
Para ver o editar esta suscripción use la siguiente URL:<br />
<br />
URL para gestionar la suscripción: {$subscriptionUrl}<br />
',
  'emails.subscriptionRenewIndl.description' => 'Este correo notifica al administrador/a de suscripciones que una suscripción individual se ha renovado en línea. Proporciona información resumida sobre la suscripción y  un enlace de acceso rápido a la suscripción renovada.',
  'emails.subscriptionRenewInstl.subject' => 'Renovación de suscripción: Institucional',
  'emails.subscriptionRenewInstl.body' => 'Se ha renovado en línea una suscripción institucional para {$contextName} con los detalles siguientes.<br />
<br />
Tipo de suscripción:<br />
{$subscriptionType}<br />
<br />
Institución:<br />
{$institutionName}<br />
{$institutionMailingAddress}<br />
<br />
Dominio (si se proporciona):<br />
{$domain}<br />
<br />
Rangos IP (si se proporcionan):<br />
{$ipRanges}<br />
<br />
Persona de contacto:<br />
{$userDetails}<br />
<br />
Información de membresía (si se proporciona):<br />
{$membership}<br />
<br />
Para ver o editar esta suscripción use la siguiente URL:<br />
<br />
URL para gestionar la suscripción: {$subscriptionUrl}<br />
',
  'emails.subscriptionRenewInstl.description' => 'Este correo en línea notifica al administrador/a de suscripciones que una suscripción institucional ha sido renovada en línea. Proporciona información resumida de la suscripción y un enlace de acceso rápido a la suscripción renovada.',
  'emails.citationEditorAuthorQuery.subject' => 'Edición de citas',
  'emails.citationEditorAuthorQuery.body' => '{$authorFirstName},<br />
<br />
Por favor, ¿podría usted verificar o proporcionarnos la cita adecuada para la siguiente referencia de su artículo, {$submissionTitle}?:<br />
<br />
{$rawCitation}<br />
<br />
¡Gracias!<br />
<br />
{$userFirstName}<br />
Corrector/a de estilo, {$contextName}<br />
',
  'emails.citationEditorAuthorQuery.description' => 'Este correo electrónico permite a los correctores/as de estilo solicitar información adicional acerca de las referencias de los autores/as.',
  'emails.revisedVersionNotify.subject' => 'Versión revisada cargada',
  'emails.revisedVersionNotify.body' => 'Editores/as:<br />
<br />
El autor {$authorName} ha cargado un versión revisada de &quot;{$submissionTitle}&quot;.<br />
<br />
URL del envío: {$submissionUrl}<br />
<br />
{$editorialContactSignature}',
  'emails.revisedVersionNotify.description' => 'Este correo electrónico se envía de forma automática al editor/a asignado cuando el autor/a carga una versión revisada de un artículo.',
  'emails.notificationCenterDefault.subject' => 'Mensaje sobre {$contextName}',
  'emails.notificationCenterDefault.body' => 'Introduzca su mensaje.',
  'emails.notificationCenterDefault.description' => 'Mensaje (en blanco) por defecto usado en el Notification Center Message Listbuilder.',
  'emails.editorDecisionInitialDecline.subject' => 'Decisión del editor/a',
  'emails.editorDecisionInitialDecline.body' => '
			{$authorName}:<br />
<br />
Hemos llegado a una decisión sobre su envío a {$contextName}, &quot;{$submissionTitle}&quot;.<br />
<br />
Nuestra decisión es: Rechazar el envío',
  'emails.editorDecisionInitialDecline.description' => 'Este correo electrónico se envía al autor/a si el editor/a rechaza su envío inicialmente, antes de la fase de revisión',
  'emails.reviewReinstate.description' => 'Este correo electrónico lo envía el editor/a de sección a un revisor/a con alguna revisión en curso para notificarle que una revisión cancelada ha sido restablecida.',
  'emails.reviewReinstate.body' => '{$reviewerName}:<br />
<br />
Nos gustaría restablecer la solicitud que le hicimos para revisar el envío &quot;{$submissionTitle},&quot; para {$contextName}. Esperamos que nos pueda ayudar en este proceso de revisión de la revista.<br />
<br />
Si tiene cualquier pregunta no dude en contactarme.',
  'emails.reviewReinstate.subject' => 'Solicitud de revisión restablecida',
  'emails.statisticsReportNotification.body' => '
{$name}, <br />
<br />
El informe de estado de su revista de {$month}, {$year} ya está disponible. Las estadísticas clave de este mes son las siguientes.<br />
<ul>
	<li>Nuevos envíos este mes: {$newSubmissions}</li>
	<li>Envíos rechazados este mes: {$declinedSubmissions}</li>
	<li>Envíos aceptados este mes: {$acceptedSubmissions}</li>
	<li>Envíos totales en el sistema: {$totalSubmissions}</li>
</ul>
Inicie sesión en la revista para obtener más detalles sobre las <a href="{$editorialStatsLink}">tendencias editoriales</a> y las <a href="{$publicationStatsLink}">estadísticas de artículos publicados</a>. Se adjunta una copia completa del informe correspondiente a este mes .<br />
<br />
Saludos cordiales,<br />
{$principalContactSignature}',
  'emails.statisticsReportNotification.description' => 'Este correo electrónico es enviado mensualmente y de manera automática a los editores y administradores de publicaciones para suministrarles una visión general de la publicación.',
  'emails.statisticsReportNotification.subject' => 'Actividad editorial por {$month}, {$year}',
  'emails.announcement.description' => 'Se mandará este email tras la creación de un nuevo anuncio.',
  'emails.announcement.subject' => '{$title}',
  'emails.announcement.body' => '<b>{$title}</b><br />
<br />
{$summary}<br />
<br />
Visite nuestro site para leer el <a href="{$url}">anuncio completo</a>.',
);