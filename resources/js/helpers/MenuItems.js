import User from './User'

class MenuItems{
    initialize(){
       return ([
            {title: 'Forum', to: '/forum', show: true},
            {title: 'Ask Question', to: '/question/ask', show: User.loggedIn()},
            {title: 'Category', to: '/category', show: User.loggedIn()},
            {title: 'Sign in', to: '/login', show: !User.loggedIn()},
            {title: 'Sign Out', to: '/logout', show: User.loggedIn()}
        ]);
    }
}

export default new MenuItems();