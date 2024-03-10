import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Interfaccia per definire la struttura dele cities
interface Cities {
  id: number;
  title: string;
  url: string;
  thumbnailUrl:string
}

// Funzione Async Thunk per recuperare le cities
export const fetchCities = createAsyncThunk(
    "fetchCities",
    async () => {
      try{
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await res.json();
      // Limit to the first 8 objects using slice
      return data.slice(0, 8);
    } catch (error) { // catch gestisci error
      console.error("Errore durente la request", error) 
    }
    }
  );

  
const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
      data: [] as Cities [] , // Array vuoto per i dati
      loading: false,
      error: false,
    },
    extraReducers: (builder: any) => {
      builder.addCase(fetchCities.pending, (state:any) => {
          state.loading = true;
          state.error = null;
        })
        builder.addCase(fetchCities.fulfilled, (state:any, action:any) => {
          state.loading = false;
          state.data = action.payload;
        })
        builder.addCase(fetchCities.rejected, (state:any, action:any) => {
          state.loading = false;
          state.error = action.error.message || 'Impossibile recuperare i dati';
        });
    },
  });

export default citiesSlice ;
