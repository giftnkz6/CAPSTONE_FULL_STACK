import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ContactView from '../views/ContactView'
import ShopView from '../views/ShopView'
import AdminView from '../views/AdminView'
import SingleProduct from '../views/SingleProduct'
import CartView from '../views/CartView'
import UserProfile from '../views/UserProfile'
import CheckOut from '../views/CheckOut'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    // beforeEnter() {
    //   if(!JSON.parse(localStorage.getItem("user")))
    //   router.push({path: "/login"})
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LoginView,
    beforeEnter() {
      router.push({path: "/login"})
      localStorage.removeItem('user');
      location.reload();

    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView,
    beforeEnter() {
      if(!JSON.parse(localStorage.getItem("user")))
      router.push({path: "/login"})
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOut,
    beforeEnter() {
      if(!JSON.parse(localStorage.getItem("user")))
      router.push({path: "/login"})
    }
  },

  {
    path: '/product/:id',
    name: 'product',
    component: SingleProduct,
    beforeEnter() {
      if(!JSON.parse(localStorage.getItem("user")))
      router.push({path: "/login"})
    }
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfile,
    beforeEnter() {
      if(!JSON.parse(localStorage.getItem("user")))
      router.push({path: "/login"})
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    beforeEnter() {
      if(!JSON.parse(localStorage.getItem("user")))
      router.push({path: "/login"})
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    beforeEnter() {
      if(!JSON.parse(localStorage.getItem("user")))
      router.push({path: "/login"})
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    beforeEnter() {
      if(!JSON.parse(localStorage.getItem("user")))
      router.push({path: "/login"})
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
