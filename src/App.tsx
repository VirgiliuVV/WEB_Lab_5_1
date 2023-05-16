import React, { useState } from 'react';
import { useStore } from './LocalStore';
import './App.css';

function MyComponent() {
    const store = useStore();

    const [localData, setLocalData] = useState<any>({ name: '', mark: '', ram: '' });

    const myData = store.myData;

    const handleAddObject = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        if (!localData.name || !localData.mark || !localData.ram) {
            alert('Complete all fields!');
            return;
        }
        store.addObject(localData);
        setLocalData({ name: '', mark: '', ram: '' });
    };

    const handleDeleteObject = (index: number) => {
        store.deleteObject(index);
        setLocalData({ name: '', mark: '', ram: '' });
    };


    return (
        <div className="container">
            <div className='start_img'>

                <div className="card_cont">
                    {myData.map((data: any, index: number) => (
                        <div key={index} className="card">
                            <span className='second'>{data.name}</span>
                            <div className='card_ins'>
                                <span className='names'>mark: </span><span className='second'>{data.mark}</span>
                            </div>
                            <div className='card_ins'>
                                <span className='names'>ram: </span><span className='second'>{data.ram} GB</span>
                            </div>
                            <button className="button2" onClick={() => handleDeleteObject(index)}>Delete</button>
                        </div>
                    ))}
                </div>
                <form className="form" onSubmit={handleAddObject}>
                    <span className='title'>Mobiles</span>
                    <div className='inp_cont'>
                        <span className='inp_txt'>Mobile Name </span>
                        <input className="input" type="text" value={localData.name} onChange={e => setLocalData({ ...localData, name: e.target.value })} />
                    </div>
                    <div className='inp_cont'>
                        <span className='inp_txt'>Mark </span>
                        <input className="input" type="text" value={localData.mark} onChange={e => setLocalData({ ...localData, mark: e.target.value })} />
                    </div>
                    <div className='inp_cont'>
                        <span className='inp_txt'>Ram </span>
                        <input className="input" type="number" value={localData.ram} onChange={e => setLocalData({ ...localData, ram: e.target.value })} />
                    </div>
                    <button className="button" type="submit">Insert</button>
                </form>
            </div>     
        </div>
    );
}

export default MyComponent;
