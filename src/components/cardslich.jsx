import React from 'react';

const Cardslich = (props) => {


    function redact(e) {
        e.preventDefault();

        const forms = document.getElementById("redackt" + props.data.id);
        console.log(forms.checkValidity());

        if (!forms.checkValidity()) {
            e.stopPropagation()
            forms.classList.add('was-validated')
            return
        }

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.token);



        var formdata = new FormData(document.getElementById("redackt" + props.data.id));

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/pets/" + props.data.id, requestOptions)
            .then(response => response.json())
            .then(result => {
                if ('data' in result) {
                    window.location.reload();
                }
            })
            .catch(error => console.log('error', error));
    }

    const dele = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.token);


        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://pets.сделай.site/api/users/orders/${id}`, requestOptions)
            .then(response => response.status)
            .then(result => {
                console.log(result)
                window.location.reload();
            })

            .catch(error => console.log('error', error));
    }

    return (
        <div>

            <div className="card h-100">
                <img src={'https://pets.сделай.site' + props.data.photos} className="card-img-top wwww" style={{ "height": "300px" }} alt="..." />
                <div className="card-body ft">
                    <div>
                        <div className="text-white">
                            <h5 className="card-title">{props.data.kind}</h5>
                            <h5 className="teext-primary">{props.data.status}</h5>
                        </div>
                        <p className="card-text">id: {props.data.id}.</p>
                        <p className="card-text">Район: {props.data.district}.</p>
                        <p className="card-text">Описание: {props.data.description} | Чип: {props.data.mark} | Дата: {props.data.date}.</p>
                    </div>
                    <div className="mt-3"><button type="button" onClick={() => dele(props.data.id)} className="btn btn-outline-danger me-2">Удалить объявление</button>
                        <button type="button" className="btn bbtn" data-bs-toggle="modal" data-bs-target={"#exampleModal1" + props.data.id}>Изменить данные</button>
                    </div>
                </div>
            </div>

            <div className="modal fade" id={"exampleModal1" + props.data.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-black text-white">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Изменение данных</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id={'redackt' + props.data.id} onSubmit={redact}>
                                <label htmlFor="inputKlic">Вид:</label>
                                <input name="kind" type="text" className="form-control" id="inputKlic" />
                                <br />
                                <label htmlFor="inputNai">Фото 1:</label>
                                <input name='photos1' type="file" className="form-control-file ddd" id="exampleFormControlFile1" accept="image/png" />
                                <br />
                                <label htmlFor="inputView">Фото 2:</label>
                                <input name='photos2' type="file" className="form-control-file ddd" id="exampleFormControlFile2" accept="image/png" />
                                <br />
                                <label htmlFor="inputVie">Фото 3:</label>
                                <input name='photos3' type="file" className="form-control-file ddd" id="exampleFormControlFile3" accept="image/png" />
                                <br />
                                <label htmlFor="inputView">Клеймо:</label>
                                <input name='mark' type="text" className="form-control" id="inputMark" />
                                <br />
                                <label htmlFor="inputView">Описание:</label>
                                <input name='description' type="text" className="form-control" id="inputOp" />


                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                    <button type="submit" className="btn bbtn">Сохранить изменения</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cardslich;