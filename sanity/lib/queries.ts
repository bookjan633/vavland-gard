export const homePageQuery = `

*[_type == "homePage"][0]{

  title,

  lead

}

`
export const pageQuery = `

*[_type == "page" && slug.current == $slug][0]{

  title,

  lead,

  heroSubtitle,

  body,

  captions

}

`