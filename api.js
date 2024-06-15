import axios from "axios";

const ChicagoApi = axios.create({
  baseURL: "https://api.artic.edu/api/v1",
});

const MetMuApi = axios.create({
  baseURL: "https://collectionapi.metmuseum.org",
});

const HARVARD_KEY = "3af5b71f-ef23-4281-bba4-e079c9691a22";

const HarvardApi = axios.create({
  baseURL: "https://api.harvardartmuseums.org",
  params: {
    apikey: HARVARD_KEY,
  },
});

//works for ten chicago works
// export const getChicagos = () => {
//   return ChicagoApi.get("/artworks?limit=10").then((res) => {
//     const artworks = [];
//     const resArray = res.data.data;
//     resArray.forEach((artwork) => {
//       const newArtObj = {
//         id: artwork.id,
//         artist: artwork.artist_title || "Unknown Artist",
//         title: artwork.title || "Unknown Title",
//         date: artwork.date_display || "Unknown Date",
//         type: artwork.artwork_type_title || "Unknown Art Type",
//         medium: artwork.medium_display || "Unknown Medium",
//         image_url: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
//         description: artwork.description || "No more information at this time",
//         location: "Art Institute of Chicago",
//       };
//       artworks.push(newArtObj);
//     });
//     console.log("retCHI", resArray);
//     return artworks;
//   });
// };

//works for ten harvard works
// export const getHarvards = (dfghjk) => {
//   return HarvardApi.get("/object").then((res) => {
//     const artworks = [];
//     const resArray = res.data.records;
//     resArray.forEach((artwork) => {
//       let artist = "";
//       let imageId;
//       //
//       if (artwork.people && artwork.people.length > 0) {
//         const artistsArr = [];
//         artwork.people.forEach((person) => {
//           artistsArr.push(person.displayname);
//         });
//         artist = artistsArr.toString();
//       } else {
//         artist = "Unknown Artist";
//       }

//       if (artwork.images && artwork.images.length > 0) {
//         imageId = artwork.images[0].idsid;
//       }
//       //
//       const newArtObj = {
//         id: artwork.id,
//         artist: artist,
//         title: artwork.title || "Unknown Title",
//         date: artwork.dated || "Unknown Date",
//         type: artwork.classification || "Unknown Art Type",
//         medium: artwork.medium || "Unknown Medium",
//         image_url: `https://ids.lib.harvard.edu/ids/iiif/${imageId}/full/843,/0/default.jpg`,
//         description: artwork.description || "No more information at this time",
//         location: "Harvard Art Museums",
//       };
//       artworks.push(newArtObj);
//     });
//     //console.log("retHARV", artworks);
//     return artworks;
//   });
// };

//WRITE A NEW FUNCTION FOR EACH API, THAT READ AN ARRAY OF IDS AND RETURNS THE SELECTED OBJECTS IN AN ARRAY

export const getMetMuSpecificIDs = async (term) => {
  try {
    const res = await MetMuApi.get(
      `/public/collection/v1/search?hasImages=true&q=${term}`
    );
    const firstBatch = [];
    const objIDS = res.data.objectIDs;
    for (let i = 0; i < 40; i++) {
      firstBatch.push(objIDS[i]);
    }
    const artworks = await Promise.all(
      firstBatch.map(async (id) => {
        const res = await MetMuApi.get(`/public/collection/v1/objects/${id}`);
        if (res.status === 200 && res.data.primaryImage) {
          const incomingOb = res.data;
          const noDes = "No more information at this time";
          return {
            id: incomingOb.objectID,
            artist: incomingOb.artistDisplayName || "Unknown Artist",
            title: incomingOb.title || "Unknown Title",
            date: incomingOb.objectDate || "Unknown Date",
            type: incomingOb.objectName || "Unknown Art Type",
            medium: incomingOb.medium || "Unknown Medium",
            image_url: incomingOb.primaryImage,
            description: incomingOb.description || noDes,
            location: "Metropolitan Museum of Art",
          };
        }
        return null;
      })
    );
    const filteredArtworks = artworks.filter(Boolean);
    console.log("metMu", filteredArtworks);
    return filteredArtworks;
  } catch (error) {
    console.error(error);
    return [];
  }
};

//doesn't work but keep
// export const getMetMuByID = (arr) => {
//   const searchArr = [...arr];
//   //console.log(searchArr);
//   const artworks = [];
//   let dud = 0;
//   searchArr.forEach((num) => {
//     return MetMuApi.get(`/public/collection/v1/objects/${num}`)
//       .then((res) => {
//         if (!res.status === 200) {
//           dud += 1;
//         } else {
//           //console.log("byID response", res);
//           const incomingOb = res.data;
//           const noDes = "No more information at this time";
//           const newArtObj = {
//             id: incomingOb.objectID,
//             artist: incomingOb.artistDisplayName || "Unknown Artist",
//             title: incomingOb.title || "Unknown Title",
//             date: incomingOb.objectDate || "Unknown Date",
//             type: incomingOb.objectName || "Unknown Art Type",
//             medium: incomingOb.medium || "Unknown Medium",
//             image_url: incomingOb.primaryImage,
//             description: incomingOb.description || noDes,
//             location: "Metropolitan Museum of Art",
//           };
//           artworks.push(newArtObj);
//           //console.log("in");
//         }
//         //console.log(artworks, dud, "fghgh");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   });
//   //console.log("resMetMu", artworks);
//   return artworks;
// };

// export const getChicagoSpecifics = (term) => {
//   return ChicagoApi.get(
//     `/artworks`,
//     {
//       params: {
//         key: "image_id",
//         // query: {
//         //   keyword: term,
//         //   term: {
//         //     image_id: true,
//         //   },
//         // },
//         limit: 100,
//       },
//     },
//     `/search?q=${term}`
//     // {
//     //   params: {
//     //     query: term,
//     //     limit: "100",
//     //   },
//     // }
//   ).then((res) => {
//     const artworks = [];
//     const resArray = res.data.data;
//     let dud = 0;

//     resArray.forEach((artwork) => {
//       if (!artwork.image_id) {
//         dud += 1;
//       } else {
//         const newArtObj = {
//           id: artwork.id,
//           artist: artwork.artist_title || "Unknown Artist",
//           title: artwork.title || "Unknown Title",
//           date: artwork.date_display || "Unknown Date",
//           type: artwork.artwork_type_title || "Unknown Art Type",
//           medium: artwork.medium_display || "Unknown Medium",
//           image_url: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
//           description:
//             artwork.description || "No more information at this time",
//           location: "Art Institute of Chicago",
//         };
//         artworks.push(newArtObj);
//       }
//     });
//     console.log("retCHI", dud, resArray);
//     return artworks;
//   });
// };

export const getHarvardSpecifics = (term) => {
  return HarvardApi.get(`/object`, {
    params: {
      keyword: term,
      // field: "images:idsid",
      size: "40",
    },
  }).then((res) => {
    const artworks = [];
    const resArray = res.data.records;
    let dud = 0;
    resArray.forEach((artwork) => {
      let artist = "";
      let imageId;
      //
      if (artwork.people && artwork.people.length > 0) {
        const artistsArr = [];
        artwork.people.forEach((person) => {
          artistsArr.push(person.displayname);
        });
        artist = artistsArr.toString();
      } else {
        artist = "Unknown Artist";
      }

      if (artwork.images && artwork.images.length > 0) {
        imageId = artwork.images[0].idsid;
      }
      //
      if (!imageId) {
        dud += 1;
      } else {
        const newArtObj = {
          id: artwork.id,
          artist: artist,
          title: artwork.title || "Unknown Title",
          date: artwork.dated || "Unknown Date",
          type: artwork.classification || "Unknown Art Type",
          medium: artwork.medium || "Unknown Medium",
          image_url: `https://ids.lib.harvard.edu/ids/iiif/${imageId}/full/843,/0/default.jpg`,
          description:
            artwork.description || "No more information at this time",
          location: "Harvard Art Museums",
        };
        artworks.push(newArtObj);
      }
    });
    console.log("retHARV", dud, artworks);
    return artworks;
  });
};

// export const getTenArtworks = () => {
//   return ChicagoApi.get("/artworks?limit=10").then((res) => {
//     //console.log(res.data.data);
//     return res.data.data;
//   });
// };
