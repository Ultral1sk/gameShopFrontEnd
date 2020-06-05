import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import FormData from "form-data";
import "./AdminEdit.styles.scss"

const useStyles = makeStyles((theme) => ({
    root: {

        paddingTop: "100px",
        color: "white",

    }
}));

const AdminEdit = (props) => {
    const classes = useStyles();
    //console.log('props.location.store', props.location.state);

    const [state, setstate] = useState(props.location.state || [])
    //console.log('props ADMINEDIT', state);

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


    useEffect(() => {
        // takes the array keys that are comming from the props.location with the keys from the component state
        // and the keys that are going to be true (equal) will complete the state value
        checkboxKeyChecker(props.location.state.genre, genre, setGenres)
        checkboxKeyChecker(props.location.state.platform, platform, setPlatforms)
        checkboxKeyChecker(props.location.state.language, language, setLanguages)

    }, [])

    const handleChange = (e) => {
        var { name, value } = e.target

        if (name === "price" || name === "discount" || name === "reviewscore") { value = parseInt(value) }
        // console.log(e.target.value)
        setstate(prevState => ({
            ...prevState,
            [name]: value

        }))
    }

    const deleteImageHandler = (i) => {

        // targets the images ID inside an array and it delets them
        const images = state.images
        const deletedImgIndex = images.slice(0, i).concat(images.slice(i + 1, images.length))
        setstate({ images: deletedImgIndex })

    }

    // controlling functions
    const handleChangeGenres = evt => setGenres({ ...genre, [evt.target.name]: evt.target.checked });
    const handleChangePlatforms = evt => setPlatforms({ ...platform, [evt.target.name]: evt.target.checked });
    const handleChangeLanguages = evt => setLanguages({ ...language, [evt.target.name]: evt.target.checked });


    // targeting the keys of the object and returning a newly created arrayObject with keys
    const convertingCheckBoxStateToArray = (checkboxState) => {
        var checkboxArray = []
        for (const key in checkboxState) {
            if (checkboxState[key] === true) {
                checkboxArray.push(key)
            }
        }
        return checkboxArray
    }


    // This function is going to check the keys of the incommingArray (which in this case are our checkbox keys)
    // and whatever every key that is going to match with the state keys is gonna give that key a new state with a boolean value
    const checkboxKeyChecker = (incommingArray, currentState, stateChanger) => {
        incommingArray.map(itemArry => {
            for (const key in currentState) {
                if (key === itemArry) {
                    stateChanger(prevState => ({
                        ...prevState,
                        [key]: true
                    }))
                }
            }
        })
    }




    const standardTextField = (fieldName, generalvalue) => {
        return <Box className="textFieldsWrapper">
            <div class="form-group">
                <label className="borderLeft">{fieldName.toUpperCase()}</label>
                <input type="text" className="textFields" placeholder={fieldName.toUpperCase()} name={fieldName} onChange={handleChange} value={generalvalue} />
            </div>
        </Box>
    }

    const numberTextField = (fieldName, generalvalue) => {
        return <Box className="textFieldsWrapper">
            <div className="form-group">
                <label className="borderLeft">{fieldName.toUpperCase()}</label>
                <input type="number" onChange={handleChange} value={generalvalue} className="textFields" placeholder={fieldName.toUpperCase()} name={fieldName} />
            </div>
        </Box>
    }

    const genresArray = ["action", "adventure", "RPG", "racing", "simulation", "sports", "strategy"]
    const platformsArray = ["PS4", "XBOX", "WIN", "NINTENDO"]
    const languagesArray = ["English", "Français", "Deutsch", "Italiano", "Español", "العربية", "Portuguese", "Polski", "日本語", "한국어"]

    const checkboxTextField = (data, stateData, fnc) => {
        return (data.map((item, key) => {
            return (
                <FormControlLabel key={key}
                    control={
                        <Checkbox
                            checked={stateData[item]}
                            onChange={fnc}
                            name={item}
                            color="primary"
                            style={{
                                color: "red",
                            }}
                        />
                    }
                    label={<span className="text-white">
                        {item.toUpperCase()}
                    </span>

                    }
                />
            )
        }))
    }

    let imagesContainer = state.images.map((item, i) => {

        return <div key={i} style={{ display: "flex", flexDirection: "column", margin: "0 11px" }}>
            <img key={i} alt="incomingimg" src={`http://localhost:5000/gamesimages/${item}`} width="200px" height="250px" />
            <button className="btn btnColor" onClick={() => deleteImageHandler(i)}>DELETE</button>
        </div>
    })

    const onSubmit = evt => {
        evt.preventDefault();

        const id = props.location.state._id
        const convertedPlatforms = convertingCheckBoxStateToArray(platform)
        const convertedLanguages = convertingCheckBoxStateToArray(language)
        const convertedGenre = convertingCheckBoxStateToArray(genre)

        const files = evt.target.file.files
        const formData = new FormData();

        // in order to send multiple files in formData package we need to loop through them 
        if (files !== null) {
            for (let i = 0; i < files.length; i++) {
                formData.append('file', files[i])

                // console.log('file', files[i]); //=> file File {name: "nba.jpeg", lastModified: 1587293559885, ....

            }
            for (let i = 0; i < state.images.length; i++) {
                formData.append('images', state.images[i])
                //console.log('state.images', state.images[i]);// => 56465353345.jpg

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
            for (let i = 0; i < convertedLanguages.length; i++) {
                formData.append('language', convertedLanguages[i])
            }
        }
        formData.append("name", evt.target.name.value);
        //formData.append("genre", convertedGenre);
        //formData.append("platform", convertedPlatforms);
        //formData.append("language", convertedLanguages);
        formData.append("price", evt.target.price.value);
        formData.append("discount", evt.target.discount.value);
        formData.append("agelimit", evt.target.agelimit.value);
        formData.append("description", evt.target.description.value);
        formData.append("releasedate", evt.target.releasedate.value);
        formData.append("publisher", evt.target.publisher.value);
        formData.append("gamewebsite", evt.target.gamewebsite.value);
        formData.append("reviewscore", evt.target.reviewscore.value);
        formData.append("id", id);
        axios
            .post("http://localhost:5000/admin/editgame", formData
                ,
                {
                    headers: { "content-type": "multipart/form-data" }, "x-auth-token": localStorage.getItem("token"),
                }
            )
            .then(function (response) {
                //console.log('response in frontend axios', response);
                setstate(response.data.response);
                document.getElementById("fileInput").value = null
                alert("Game Saved")
            })
            .catch(function (error) {
                // console.log(error);
            });
    }
    return (
        <div className="adminEditWrapper">
            <form onSubmit={onSubmit} encType="multipart/form-data" className={classes.root} noValidate autoComplete="off" style={{ width: "100%" }}>
                <h1 className="adminAddTitle">Admin Edit Game</h1>
                <div className="imagesContainer" style={{ display: "flex", marginBottom: "50px" }}>
                    {imagesContainer}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "20px" }}>
                        <p >Upload Photo</p>
                        <input type="file" id="fileInput" className="form-control-file" name="file" placeholder="load" multiple />
                    </div>
                </div>
                <div className="borderBottom fourTextFieldsBoxWrapper" >
                    {numberTextField("price", state.price)}
                    {numberTextField("discount", state.discount)}
                    {numberTextField("reviewscore", state.reviewscore)}
                    {numberTextField("agelimit", state.agelimit)}
                </div>
                <Box className="descriptionWrapper" >
                    <label className="borderLeft">DESCRIPTION</label>
                    <textarea
                        placeholder="DESCRIPTION"
                        className="desciptionTextField"
                        rows="6"
                        name="description"
                        onChange={handleChange}
                        value={state.description}
                    />
                </Box>
                <div className="fourTextFieldsBoxWrapper">
                    {standardTextField("name", state.name)}
                    {standardTextField("releasedate", state.releasedate)}
                    {standardTextField("publisher", state.publisher)}
                    {standardTextField("gamewebsite", state.gamewebsite)}
                </div>

                <div className="checkboxgroupWrapper">
                    <p >Select Genres</p>
                    <div className="checkboxWrapper">
                        {checkboxTextField(genresArray, genre, handleChangeGenres)}
                    </div>
                </div>
                <div className="checkboxgroupWrapper">
                    <p >Select One Platform</p>
                    <div className="checkboxWrapper">
                        {checkboxTextField(platformsArray, platform, handleChangePlatforms)}
                    </div>
                </div>
                <div className="checkboxgroupWrapper">
                    <p >Select Languages</p>
                    <div className="checkboxWrapper">
                        {checkboxTextField(languagesArray, language, handleChangeLanguages)}
                    </div>
                </div>

                <button type="submit" className="btn btn-labeled btn-block saveBTN">
                    <span className="btn-label"><SaveIcon /></span>SAVE</button>
            </form>
        </div>
    )
}


export default AdminEdit

