const requset = async (url, data) => {
  let resp = await fetch(url, {
    method: "POST",
    body: data,
  });

  return await resp.text();
};

export default requset;
