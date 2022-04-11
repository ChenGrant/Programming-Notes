export const snapshotToTodo = (snapshot) =>
  snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

export const hasTimeProperty = (snapshot) =>
  snapshot.docs.reduce(
    (prev, curr) => prev && curr.data().createdAt && curr.data().lastEdited,
    true
  );
