const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "77bba26a06618bda2e866040df87f721",
    originalImage: (imgPath) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
