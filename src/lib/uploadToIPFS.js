import axios from 'axios'

const uploadToIPFS = async (data) => {
  var config = {
    method: 'post',
    url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
    headers: {
      'Content-Type': 'application/json',
      pinata_api_key: '160c3a054f8040ec5d3e',
      pinata_secret_api_key:
        '55e4d38cf34bbb13330b4944d02ad18ee7db0f2455f2bef63cf58a795a1bc1fc'
      // Authorization:
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5ZjI3Y2E5MC1kYTk4LTQ5YjYtYjZiNS0zOTBmMzM4YjdiZjciLCJlbWFpbCI6ImdhYnJpZWxhbnRvbnk1NkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMTYwYzNhMDU0ZjgwNDBlYzVkM2UiLCJzY29wZWRLZXlTZWNyZXQiOiI1NWU0ZDM4Y2YzNGJiYjEzMzMwYjQ5NDRkMDJhZDE4ZWU3ZGIwZjI0NTVmMmJlZjYzY2Y1OGE3OTVhMWJjMWZjIiwiaWF0IjoxNjYzMTU4NDU1fQ.g3JY8mDtjj8EYEgTdvlg77VgJBG2WXDv1xxDEmRe8ss'
    },
    data: data
  }
  const { data: output } = await axios(config)
  console.log(output)
  return output
}

export default uploadToIPFS
