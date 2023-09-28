import { useStore } from "vuex";

const useAuth = () => {
  const store = useStore();
  console.log(store);
  const createUser = async (user) => {
    console.log(user);
  };

  return {
    createUser,
  };
};

export default useAuth;
