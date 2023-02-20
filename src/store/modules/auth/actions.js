export default {
    async logIn(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'logIn'
        })
    },
    async signUp(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signUp'
        })
    },
    async auth(context, payload) {
        const mode = payload.mode;
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNPWcP3p7fkYFOwsXr-4fugrQDy1orEJc`;

        const showError = function(res) {
                if (mode === 'logIn' && !res.ok) {
                    const error = new Error(res.message || 'Email or password is not valid');
                    throw error
                }
                if (mode === 'signUp' && !res.ok) {
                    if (res.error.message === 'EMAIL_EXISTS') {
                        const error = new Error('User with this email is already registered');
                        throw error;
                    }
                    const error = new Error(res.error.message);
                    throw error;
                }
        }

        if (mode === 'signUp') {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNPWcP3p7fkYFOwsXr-4fugrQDy1orEJc`
        }

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.login,
                password: payload.password,
                returnSecureToken: true
            })
        })

        const responseData = await response.json();
        
        showError(response);

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })

        const userId = context.getters['getUserId'];
        const token = context.getters['getToken'];

        context.dispatch('cart/getCart', {
            userId: userId,
            token: token
        }, { root: true })
    },
    autoLogIn(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId')

        console.log(token, userId);

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId,
                tokenExpiration: null
            })
            
            context.dispatch('cart/getCart', {
                userId: userId,
                token: token
            }, { root: true })
        }
    },
    logOut(context) {
        context.commit('logOut', {
            token: null,
            userId: null,
            tokenExpiration: null
        })
    }
}