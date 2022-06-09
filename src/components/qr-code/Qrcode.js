import QRCode from 'qrcode'
import React, {useState} from 'react'
import { Button } from '@mui/material'
import './QR.css'

const Qrcode = () => {
    const [url, setUrl] = useState('')
    const [qr, setQr] = useState('')
    console.log(url)
    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 800,
            margin: 2,
            color: {
//                 dark: '#335383FF',
     //            light: '#EEEEEEFF'
            }
        },(err, url) => {
            if (err) return console.error(err)
            console.log(url)
            setQr(url)
        })
    }


  return (
    <div className='Qrcode'>
        <h1>QR GENERATOR</h1>
        <input type="text" placeholder='e.g. https://google.com'
            value={url}
            onChange = {(e) => {setUrl(e.target.value)}}/>
        <Button variant="contained" onClick={GenerateQRCode}>Generate</Button>
        {qr && <>
                    <img src={qr} />
                    <Button variant='contained' color='success' href={qr} download="qrcode.png">Download</Button>
                </>}
           
    
    </div>
  )
}
export default Qrcode;
