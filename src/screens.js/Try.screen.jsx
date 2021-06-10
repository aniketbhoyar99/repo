import axios from 'axios'
import React from 'react'

const Try = () => {

    const headers = {
        Accept: 'application/json',
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMzZmNTYzMTY3MzVmNTk5MGM2YjViM2U3NmQyMjYzNDQzMmFlODI2Y2UyZDVmYzA3YjAzYzY3Y2JiNThiYmQxZmRkOTU1NWQ0YjNiZjA3NTAiLCJpYXQiOjE2MjI5MTk5MDQuMjcwNjczLCJuYmYiOjE2MjI5MTk5MDQuMjcwNjc2LCJleHAiOjE2NTQ0NTU5MDQuMjY2NzU4LCJzdWIiOiIxMCIsInNjb3BlcyI6W119.ScIQwxXWjuMSTwYK13bseKSGlPsatfz49CAM-_aXNDMobzHPPy0b-jDYIO-ArCMAIRls4vXzm0kflaVJZ6sr7KCFZFm9J8K9EcPQ7uleMpEuswdavm11UgkBxic15vqDIcWUO6m9D7fLfcnbJPbOWTg7umckPBffkQCfG5s0pcX5licxwgKlK8y-TU--5UTC5WoeLuCwzMVF79V-FsXRyhr74ZT831nsed2TtOZNmyHFVauvEeGpWEFCh4zbx8aVWhULqLx6yBMzLUVSpMbipqqVo-o3IXrPLe4BeiXdX8gvX5arIY3Qub32KGhVSBwHYpY1OIsOGUYX76j3S-SoXMeedaLeR4ytM3R9-7eEsQI5eJ3UirNSqZ9YptroNMSiRfTttDBWm966C7Bmd7Zpg248iolDS-6crMv_fsIcz9Krdd--QcsntqzEwuACTb93G8-08CndfLurqBHp7y2AyCY_iNNr8bJPuFLLY4lm2soVWK964Cp-KUubXgUe5Y0fwFAEI9eohMTtzoGexyWrG2kCASmNLY3RbI4l3kdPGAnnbrOmR1E2-W9Vx-vT5T69vLNUwJUv0Z7y45HWP8JkGPQy-elV2M5JUuHG_WONakqIr5u54qs_F0iOueve9DSnrMFbIfy_oQFYa5GDSJmMoAVVmpGPnajolBRCPNGM63A"

    }
    axios.get('http://best-it-training.com/api/categories', { headers }).then(resp => {
        console.log("====>tryyy", resp);
    }).catch(err => {
        console.log("===>try errorrr", err);
        console.log(headers);
    })
    let tryFun = "sumit hingaspure"
    let arr = tryFun.slice(0, 3)
    console.log("00000000000000000000000", arr);



    return (
        <div>
            <h1>trry.............</h1>
        </div>
    )
}

export default Try
