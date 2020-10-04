import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Input from './input/Input';
import { Album, AlbumErrors, AlbumFormFields } from '../app.types';
import axios from 'axios';
import { getCookie } from '../../utils/cookies';

const Axios = axios.create({
    baseURL: '/music',
    headers: { 'X-CSRFToken': getCookie('csrftoken') },
});

const template = `
    <div v-if="loading" >
        Loading...
    </div>
    <form 
        v-else 
        @submit="submitForm" 
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">   
            <Input 
                v-for="(field, fieldName) in fields"
                :key="fieldName"
                :name="fieldName"
                :initial="formData[fieldName]"
                :field="field"
                :errors="errors[fieldName]"
                @on-change="onChangeField"
            />
            <div class="flex justify-end">
              <button 
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                  type="submit">
                Submit
              </button>
            </div>
    </form>
`;

@Component({
    template,
    name: 'AlbumForm',
    components: { Input },
})
export default class AlbumForm extends Vue {

    album_id: number | undefined;
    formData: Album = <Album>{};
    fields: AlbumFormFields = <AlbumFormFields>{};
    errors: AlbumErrors = {};
    loading: boolean = true;

    mounted() {
        // @ts-ignore - Comes from the Django template
        this.album_id = album_id;
        // Initialise our form data.
        // This data is what we will send to the server
        this.formData = {
            artist: 0,
            name: 'test',
            releaseDate: '',
            numStars: 0,
        };

        this.getFormOptions();
        this.getAlbumData();
    }


    getAlbumData() {

        if (this.album_id) {
            Axios.get(`/api/albums/${this.album_id}`)
                .then((res) => {
                    this.formData = res.data;
                })
                .catch((err) => {
                    console.log('err', err);
                });
        }
    }

    getFormOptions() {
        Axios.options('/api/albums')
            .then((res) => {
                this.fields = res.data.actions.POST;
            })
            .catch((err) => {
                console.log('err', err);
            })
            .finally(() => {
                this.loading = false;
            });
    }

    submitForm(e: Event) {
        if (this.album_id) {
            Axios.put(`/api/albums/${this.album_id}`, this.formData)
                .then(this.handleSuccesSubmit)
                .catch(this.handleErrorSubmit);
        } else {
            Axios.post(`/api/albums/`, this.formData)
                .then(this.handleSuccesSubmit)
                .catch(this.handleErrorSubmit);
        }

        e.preventDefault();
    }

    handleSuccesSubmit(res: any) {
        console.log(res);
    }

    handleErrorSubmit(err: any) {
        this.errors = err.response.data;
    }

    // Handle the on change of any input
    onChangeField(field: string, value: any) {
        // @ts-ignore - so that we can use field inside formData
        this.formData[field] = value;
    }
}