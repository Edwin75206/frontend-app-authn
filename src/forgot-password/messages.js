import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'forgot.password.page.title': {
    id: 'forgot.password.page.title',
    defaultMessage: 'Olvidé mi contraseña | {siteName}',
    description: 'Título de la página para recuperar contraseña',
  },
  'forgot.password.page.heading': {
    id: 'forgot.password.page.heading',
    defaultMessage: 'Restablecer contraseña',
    description: 'Encabezado de la página de recuperación de contraseña.',
  },
  'forgot.password.page.instructions': {
    id: 'forgot.password.page.instructions',
    defaultMessage: 'Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.',
    description: 'Mensaje de instrucciones para la página de recuperar contraseña.',
  },
  'forgot.password.page.invalid.email.message': {
    id: 'forgot.password.page.invalid.email.message',
    defaultMessage: 'Ingresa un correo electrónico válido',
    description: 'Mensaje de correo inválido para el campo de entrada.',
  },
  'forgot.password.page.email.field.label': {
    id: 'forgot.password.page.email.field.label',
    defaultMessage: 'Correo electrónico',
    description: 'Etiqueta del campo de correo en la página de recuperar contraseña.',
  },
  'forgot.password.page.submit.button': {
    id: 'forgot.password.page.submit.button',
    defaultMessage: 'Enviar',
    description: 'Texto del botón para enviar la solicitud de recuperar contraseña.',
  },
  'forgot.password.error.alert.title': {
    id: 'forgot.password.error.alert.title.',
    defaultMessage: 'No pudimos contactarte.',
    description: 'Fallo al enviar el correo de recuperación de contraseña.',
  },
  'forgot.password.error.message.title': {
    id: 'forgot.password.error.message.title',
    defaultMessage: 'Ocurrió un error.',
    description: 'Título del mensaje que aparece cuando ocurre un error en la página de asistencia de contraseña.',
  },
  'forgot.password.request.in.progress.message': {
    id: 'forgot.password.request.in.progress.message',
    defaultMessage: 'Tu solicitud anterior sigue en proceso, inténtalo de nuevo en unos momentos.',
    description: 'Mensaje mostrado cuando ya hay una solicitud de recuperación en progreso.',
  },
  'forgot.password.empty.email.field.error': {
    id: 'forgot.password.empty.email.field.error',
    defaultMessage: 'Ingresa tu correo electrónico',
    description: 'Mensaje de error cuando el usuario deja vacío el campo de correo.',
  },
  'forgot.password.email.help.text': {
    id: 'forgot.password.email.help.text',
    defaultMessage: 'El correo que utilizaste para registrarte en {platformName}',
    description: 'Texto de ayuda para el campo de correo.',
  },

  // Confirmation Alert Message
  'confirmation.message.title': {
    id: 'confirmation.message.title',
    defaultMessage: 'Revisa tu correo',
    description: 'Título del mensaje de confirmación de recuperación de contraseña.',
  },
  'confirmation.support.link': {
    id: 'confirmation.support.link',
    defaultMessage: 'contacta al soporte técnico',
    description: 'Texto del enlace al soporte técnico.',
  },
  'need.help.sign.in.text': {
    id: 'need.help.sign.in.text',
    defaultMessage: '¿Necesitas ayuda para iniciar sesión?',
    description: 'Enlace de ayuda para iniciar sesión en la página de recuperar contraseña.',
  },
  'additional.help.text': {
    id: 'additional.help.text',
    defaultMessage: 'Para más ayuda, contacta al soporte de {platformName} en ',
    description: 'Texto adicional de ayuda en la página de recuperar contraseña.',
  },
  'sign.in.text': {
    id: 'sign.in.text',
    defaultMessage: 'Iniciar sesión',
    description: 'Enlace a la página de inicio de sesión en la página de contraseña.',
  },
  'extend.field.errors': {
    id: 'extend.field.errors',
    defaultMessage: '{emailError} abajo.',
    description: 'Extiende el mensaje de error para la alerta.',
  },

  // Reset password token validation failure
  'invalid.token.heading': {
    id: 'invalid.token.heading',
    defaultMessage: 'Enlace de restablecimiento inválido',
    description: 'Encabezado cuando el enlace de restablecer contraseña es inválido.',
  },
  'invalid.token.error.message': {
    id: 'invalid.token.error.message',
    defaultMessage: 'Este enlace de restablecimiento no es válido o ya fue usado. Ingresa tu correo para recibir un nuevo enlace.',
    description: 'Mensaje cuando el enlace de restablecimiento expiró o es inválido.',
  },
  'token.validation.rate.limit.error.heading': {
    id: 'token.validation.rate.limit.error.heading',
    defaultMessage: 'Demasiadas solicitudes',
    description: 'Mensaje cuando hay demasiadas solicitudes al servidor.',
  },
  'token.validation.rate.limit.error': {
    id: 'token.validation.rate.limit.error',
    defaultMessage: 'Ocurrió un error debido a demasiadas solicitudes. Intenta nuevamente más tarde.',
    description: 'Mensaje cuando el servidor responde con código 429.',
  },
  'token.validation.internal.sever.error.heading': {
    id: 'token.validation.internal.sever.error.heading',
    defaultMessage: 'Error al validar el token',
    description: 'Mensaje cuando falla la validación del token de restablecimiento.',
  },
  'token.validation.internal.sever.error': {
    id: 'token.validation.internal.sever.error',
    defaultMessage: 'Ocurrió un error. Intenta refrescar la página o revisa tu conexión.',
    description: 'Mensaje cuando el servidor responde con código 500.',
  },

  // Error messages
  'internal.server.error': {
    id: 'internal.server.error',
    defaultMessage: 'Ocurrió un error. Intenta refrescar la página o revisa tu conexión.',
    description: 'Mensaje cuando el servidor responde con un error 500.',
  },
});

export default messages;
