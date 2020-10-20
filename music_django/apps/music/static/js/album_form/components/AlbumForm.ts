import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Input from './input/Input';
import { Album, AlbumErrors, AlbumFormFields } from '../app.types';
import axios from 'axios';
import { getCookie } from '../../utils/cookies';
import Button from '../components/generic/Button';
import Heading from '../components/generic/Heading';
import Card from '../components/generic/Card';

const Axios = axios.create({
    baseURL: '/music',
    headers: { 'X-CSRFToken': getCookie('csrftoken') },
});

const template = `
    <Card>   
        <Heading :text="title" />
        <div v-if="loading" >Loading...</div>
        <form 
            v-else 
            @submit="submitForm" >
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
                    <Button text="Submit" type="submit" />
                </div>
        </form>
    </Card>
`;

@Component({
    template,
    name: 'AlbumForm',
    components: { Card, Input, Button, Heading },
})
export default class AlbumForm extends Vue {

    title: string = "";
    album_id: number | undefined;
    formData: Album = <Album>{};
    fields: AlbumFormFields = <AlbumFormFields>{};
    errors: AlbumErrors = {};
    loading: boolean = true;

    mounted() {
        // @ts-ignore - Comes from the Django template
        this.album_id = album_id;

        if (this.album_id) this.title = "Update album";
        else this.title = "Add new album";

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
                .then(this.handleSuccessSubmit)
                .catch(this.handleErrorSubmit);
        } else {
            Axios.post(`/api/albums/`, this.formData)
                .then(this.handleSuccessSubmit)
                .catch(this.handleErrorSubmit);
        }

        e.preventDefault();
    }

    handleSuccessSubmit(res: any) {
        alert("Success!")
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