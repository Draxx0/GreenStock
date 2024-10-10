// src/store/index.js
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

export interface User {
  id: string;
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  documentId: string;
  email: string;
  local: string | null;
  provider: string;
  publishedAt: string;
  updatedAt: string;
  username: string;
}

export interface Session {
  jwt: string;
  user: User;
}

export interface State {
  session: Session | null;
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  state() {
    return {
      session: JSON.parse(localStorage.getItem('session') || 'null'),
    };
  },
  mutations: {
    login(state, session: Session) {
      state.session = session;
      localStorage.setItem('session', JSON.stringify(session));
    },
    logout(state) {
      state.session = null;
      localStorage.removeItem('session');
    },
  },
  actions: {
    login({ commit }, session: Session) {
      commit('login', session);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    isAuthenticated(state): boolean {
      return !!state.session;
    },
    getSession(state): Session | null {
      return state.session;
    },
    getUser(state): User | null {
      if (!state.session) return null;

      return state.session.user;
    },
  },
});

export default store;
