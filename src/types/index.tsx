export interface Forecast {
  current: {
    temp_c: number;
  };
  forecast: {
    forecastday: [{
      day: {
        daily_chance_of_rain: number;
        condition: {
          icon: string;
          text: string;
        }
      }
    }
    ]
  },
  location: {
    name: string;
  }
}

export interface Activity {
  type: string;
  date: string;
  time: string;
  performer: string;
  pitch: string;
}