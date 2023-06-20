import state from './state';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

const myCustomModule = {
    namespaced: true,
        state,
        getters,
        actions,
        mutations
}

export default myCustomModule;