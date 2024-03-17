import AuthService from './auth'; // Import your authentication service

export function startPublicConversation() {
    if (AuthService.loggedIn()) {
        // Logic to start a public conversation
        // This could involve rendering a form or initiating some other action
        console.log('Starting public conversation...');
    } else {
        // Redirect user to login page if not logged in
        console.log('User not logged in. Redirecting to login page...');
        // You can use history.push('/login') here if you have access to the history object
    }
}

export function startPrivateConversation() {
    if (AuthService.loggedIn()) {
        // Logic to start a private conversation
        // This could involve rendering a form or initiating some other action
        console.log('Starting private conversation...');
    } else {
        // Redirect user to login page if not logged in
        console.log('User not logged in. Redirecting to login page...');
        // You can use history.push('/login') here if you have access to the history object
    }
}
