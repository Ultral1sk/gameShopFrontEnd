import React, { useState } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormData from "form-data";
import axios from 'axios';
import "./AdminAdd.styles.scss"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        paddingTop: "100px",
        color: "white",

    }
}));

function AdminAdd() {
    const history = useHistory()
    const classes = useStyles();
    const [platform, setPlatforms] = useState({
        PS4: false,
        XBOX: false,
        WIN: false,
        NINTENDO: false
    });
    const [genre, setGenres] = useState({
        action: false,
        adventure: false,
        RPG: false,
        sports: false,
        racing: false,
        simulation: false,
        strategy: false
    });
    const [language, setLanguages] = useState({
        English: false,
        Français: false,
        Deutsch: false,
        Italiano: false,
        Español: false,
        العربية: false,
        Portuguese: false,
        Polski: false,
        日本語: false,
        한국어: false,
    });

    const handleChangeGenres = evt => setGenres({ ...genre, [evt.target.name]: evt.target.checked });
    const handleChangePlatforms = evt => setPlatforms({ ...platform, [evt.target.name]: evt.target.checked });
    const handleChangeLanguages = evt => setLanguages({ ...language, [evt.target.name]: evt.target.checked });
    const objectFiltering = (objectState) => {
        var convertedObject = []
        for (const key in objectState) {
            if (objectState[key] === true) {
                convertedObject.push(key)

            }
        }
        return convertedObject
    }
    const onSubmit = evt => {
        evt.preventDefault();
        const convertedPlatforms = objectFiltering(platform)
        const convertedLanguages = objectFiltering(language)
        const convertedGenre = objectFiltering(genre)
        // console.log('converted bitches', convertedPlatforms, convertedLanguages, convertedGenre);

        const files = evt.target.file.files
        const formData = new FormData();

        if (files !== null) {
            for (let i = 0; i < files.length; i++) {
                formData.append('file', files[i])
            }
        }
        if (convertedGenre !== null) {
            for (let i = 0; i < convertedGenre.length; i++) {
                formData.append('genre', convertedGenre[i])
            }
        }
        if (convertedPlatforms !== null) {
            for (let i = 0; i < convertedPlatforms.length; i++) {
                formData.append('platform', convertedPlatforms[i])
            }
        } if (convertedLanguages !== null) {
            for (var i = 0; i < convertedLanguages.length; i++) {
                formData.append('language', convertedLanguages[i])
            }
        }

        formData.append("name", evt.target.name.value);
        // formData.append("genre", convertedGenre);
        // formData.append("platform", convertedPlatforms);
        // formData.append("language", convertedLanguages);
        formData.append("price", evt.target.price.value);
        formData.append("discount", evt.target.discount.value);
        formData.append("agelimit", evt.target.agelimit.value);
        formData.append("description", evt.target.description.value);
        formData.append("releasedate", evt.target.releasedate.value);
        formData.append("publisher", evt.target.publisher.value);
        formData.append("gamewebsite", evt.target.gamewebsite.value);
        formData.append("reviewscore", evt.target.reviewscore.value);
        // console.log(files, files[1])

        axios
            .post(
                "http://localhost:5000/admin/addgame",
                formData,
                {
                    headers: {
                        //              "x-auth-token": localStorage.getItem("token"),
                        "content-type": "multipart/form-data"
                    }
                }
            )
            .then(function (response) {
                // console.log('response in frontend axios', response);
                alert("Game Saved")
                history.push("/admin/addgame")
            })
            .catch(function (error) {
                // console.log(error);
            });


    }
    const numberTextField = (fieldName, key) => {
        return (
            <Box className="textFieldsWrapper" key={key}>
                <div className="form-group">
                    <input type="number" className="textFields" placeholder={fieldName.toUpperCase()} name={fieldName} />
                </div>

            </Box>
        )
    }
    const standardTextField = (fieldName, key) => {
        return (
            <Box className="textFieldsWrapper" key={key}>
                <div className="form-group">
                    <input type="text" className="textFields" placeholder={fieldName.toUpperCase()} name={fieldName} />
                </div>
            </Box>
        )
    }
    // console.log("states", genre, platform, language);

    const genresArray = ["action", "adventure", "RPG", "racing", "simulation", "sports", "strategy"]
    const platformsArray = ["PS4", "XBOX", "WIN", "NINTENDO"]
    const languagesArray = ["English", "Français", "Deutsch", "Italiano", "Español", "العربية", "Portuguese", "Polski", "日本語", "한국어"]

    const checkboxTextField = (data, nameOfState, func) => {
        return (data.map((item, key) => {
            return (
                <FormControlLabel key={key}
                    control={
                        <Checkbox
                            checked={nameOfState.item}
                            onChange={func}
                            name={item}
                            color="primary"
                            style={{
                                color: "rgba(253, 22, 22, 0.74)",
                            }}
                        />
                    }
                    label={<span className="text-white">{item.toUpperCase()}</span>}
                />
            )
        }))
    }
    return (
        <div className="adminAddWrapper">
            <form onSubmit={onSubmit} encType="multipart/form-data" className={classes.root} noValidate autoComplete="off">
                <h1 className="adminAddTitle">Admin Add Game</h1>
                <Box className="fileUploadBox">
                    <p>Upload Photo</p>
                    <label ><span role="img" aria-label="emoji">📀</span> Select multiple files and save on server folder :</label>
                    <input
                        type="file"
                        className="form-control-file "
                        name="file"
                        placeholder="load"
                        id="custom-file-input"
                        multiple
                    />
                </Box>
                <div className="borderBottom fourTextFieldsBoxWrapper" >

                    {standardTextField("name")}
                    {numberTextField("price")}
                    {numberTextField("discount")}
                    {numberTextField("agelimit")}
                </div>
                <Box className="descriptionWrapper" >
                    <textarea
                        placeholder="DESCRIPTION"
                        className="desciptionTextField"
                        rows="6"
                        name="description"
                    />
                </Box>
                <div className="fourTextFieldsBoxWrapper">
                    {standardTextField("releasedate")}
                    {standardTextField("publisher")}
                    {standardTextField("gamewebsite")}
                    {numberTextField("reviewscore")}
                </div>
                <div className="checkboxgroupWrapper">
                    <p >Select Genres</p>
                    <div className="checkboxWrapper">
                        {checkboxTextField(genresArray, "genre", handleChangeGenres)}
                    </div>
                </div>
                <div className="checkboxgroupWrapper">
                    <p >Select One Platform</p>
                    <div className="checkboxWrapper">
                        {checkboxTextField(platformsArray, "platform", handleChangePlatforms)}
                    </div>
                </div>
                <div className="checkboxgroupWrapper">
                    <p >Select Languages</p>
                    <div className="checkboxWrapper">
                        {checkboxTextField(languagesArray, "language", handleChangeLanguages)}
                    </div>
                </div>

                <button type="submit" className="btn btn-labeled saveBTN btn-block">
                    <span className="btn-label "><SaveIcon /></span>SAVE</button>

            </form>
        </div>
    )
}
export default AdminAdd
