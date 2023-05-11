export const getUltimos = async () => {
    const resp = await fetch('https://ticket-socket-server-dmp.herokuapp.com/ultimos');
    const data = await resp.json();
    console.log(data);
    return data.ultimos;
}