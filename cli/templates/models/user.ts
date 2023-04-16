const user = {
  name: "User",
  fields: {
    id: {
      type: "ID",
      isRequired: true,
    },
    name: {
      type: "String",
      isRequired: true,
    },
    email: {
      type: "String",
      isRequired: true,
    },
  },
};

export default user;
