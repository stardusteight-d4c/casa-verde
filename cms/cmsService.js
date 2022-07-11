export async function cmsService({ query }) {
  const dataContentResponse = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + process.env.DATO_TOKEN
    },
    body: JSON.stringify({
      query,
    }),
  }).then(async (serverResponse) => {
    const body = await serverResponse.json()
    return body
  })

  // console.log(dataContentResponse.data.allFeedbackContents);
  return {
    data: dataContentResponse.data,
  }
}
