const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

/**
 * 🔐 Asignar rol de admin a un usuario
 */
exports.setAdminRole = functions.https.onCall(async (data, context) => {
    const { uid } = data;

    // 1. Verificar autenticación
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "unauthenticated",
            "Debes iniciar sesión"
        );
    }

    // 2. Verificar si quien ejecuta ya es admin
    if (context.auth.token.admin !== true) {
        throw new functions.https.HttpsError(
            "permission-denied",
            "No tienes permisos"
        );
    }

    // 3. Asignar custom claim
    await admin.auth().setCustomUserClaims(uid, {
        admin: true
    });

    return {
        success: true,
        message: `Usuario ${uid} ahora es admin`
    };
});