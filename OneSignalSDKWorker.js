importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(async function(OneSignal) {
    await OneSignal.init({
      appId: "78233a09-2311-41ae-9830-c2e51bfbd427",
    });
  });