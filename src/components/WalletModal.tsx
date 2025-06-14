import React from 'react';
import './WalletModal.css';

// Import wallet icons or use URLS
// import leoWalletIcon from '../assets/leowallet.png';
// import puzzleWalletIcon from '../assets/puzzlewallet.png';
// import soterWalletIcon from '../assets/soterwallet.png';
// import foxWalletIcon from '../assets/foxwallet.svg';

const WalletModal = ({ isOpen, onClose, onWalletSelect }) => {
    if (!isOpen) return null;

    // need to match identifiers used by aleo-hook
    const wallets = [
        {
            id: 'leo-wallet',
            name: 'Leo Wallet',
            // icon: leoWalletIcon,
        },
        {
            id: 'puzzle-wallet',
            name: 'Puzzle Wallet',
            // icon: puzzleWalletIcon,
        },
        {
            id: 'soter-wallet',
            name: 'Soter Wallet',
            // icon: soterWalletIcon,
        },
        {
            id: 'fox-wallet',
            name: 'Fox Wallet',
            // icon: foxWalletIcon,
        },
    ];

    return (
        <div className='modal-overlay mt-[40vh]'>
            <div className="wallet-modal">
                <div className="modal-header">
                    <h2>Select Wallet</h2>
                    <button className='close-button' onClick={onClose}>x</button>
                </div>
                <div className='wallet-options'>
                    {wallets.map((wallet) => (
                        <div key={wallet.id} className='wallet-option' onClick={() => onWalletSelect(wallet.id)}>
                            {/* <img src={wallet.icon} alt={`${wallet.name} icon`} /> */}
                            <span>{wallet.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WalletModal