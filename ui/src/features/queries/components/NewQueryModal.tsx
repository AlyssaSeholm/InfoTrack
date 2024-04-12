import React, { useState, KeyboardEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

interface Chip {
  id: number;
  label: string;
}

const openNewQueryModal = () => {
  const companies = useSelector((state: RootState) => state.company.companies);
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [radioValue, setRadioValue] = useState('Google');
  const [chips, setChips] = useState<Chip[]>([]);
  const [inputText, setInputText] = useState('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputText) {
        const newChip = { id: Date.now(), label: inputText };
        setChips([...chips, newChip]);
        setInputText('');
      }
    }
  };

  const removeChip = (id: number) => {
    setChips(chips.filter(chip => chip.id !== id));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ selectedCompany, radioValue, chips });
    // Dispatch action or handle the submission data as needed
  };

  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">Create New Entry</h3>
        <form method="dialog" onSubmit={handleSubmit}>
          <label className="label">Company</label>
          <select className="select select-bordered w-full" value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
            {companies.map(company => (
              <option key={company.id} value={company.id}>{company.name}</option>
            ))}
          </select>
          
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Google</span>
              <input type="radio" name="provider" className="radio" checked={radioValue === 'Google'} onChange={() => setRadioValue('Google')} />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Other</span>
              <input type="radio" name="provider" className="radio" checked={radioValue === 'Other'} onChange={() => setRadioValue('Other')} />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Tags</span>
            </label>
            <input type="text" placeholder="Add a tag" className="input input-bordered" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={handleKeyDown} />
            <label className="label">
              <span className="label-text-alt">Press enter to confirm input</span>
            </label>
          </div>

          <div className="flex flex-wrap gap-2">
            {chips.map(chip => (
              <div key={chip.id} className="badge badge-outline">
                {chip.label}
                <button className="btn btn-xs btn-circle btn-outline" onClick={() => removeChip(chip.id)}>x</button>
              </div>
            ))}
          </div>

          <div className="modal-action">
            <button className="btn" type="submit">Create</button>
            <button className="btn btn-outline" onClick={() => (document.getElementById('my_modal_4') as HTMLDialogElement).close()}>Close</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default openNewQueryModal;