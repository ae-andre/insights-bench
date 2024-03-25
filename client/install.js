// A criterion for an application being a PWA is that it is installable. This file defines logic for handling the installation process.
// Specifically it makes an install button appear when a landing page link is clicked and when the app is installed clears UI elements related to the install. It listens for the beforeinstallprompt event and stores the event for later use and implements logic to  trigger the installation prompt when the user interacts with the install button.
// And it implements the install logic ie. the install button (butInstall) triggers the installation prompt, and the appinstalled event is handled, clearing the prompt
// There was not much source-code given for this file. The handler functions were defined by me.

const butInstall = document.getElementById('install-button');

// Logic for installing the PWA
// Added an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //Store the triggered events
    window.deferredPrompt = event;
    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

// Implemented a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // Show prompt
    promptEvent.prompt();
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// Added a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
});