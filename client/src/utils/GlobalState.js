import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_POST,
  REMOVE_POST,
  UPDATE_POSTS,
  ADD_POST,
  LOADING,
  SET_ERROR,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPosts: action.payload,
        loading: false,
      };

    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.posts],
        loading: false,
      };

    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
        loading: false,
      };

    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post._id !== action._id;
        }),
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        posts: action.error,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      _id: 0,
      body: "",
      activity: "",
      duration: "",
      creator: "",
      points: "",
      fileUpload: "",
      likes: "",
    },
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
