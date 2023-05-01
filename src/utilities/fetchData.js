export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'b488fa1e94mshc79390974f77d64p15878bjsn88c37ff5e378',
    }
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'b488fa1e94mshc79390974f77d64p15878bjsn88c37ff5e378',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  