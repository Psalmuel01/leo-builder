import React, { useState } from 'react'
import { WalletProvider, useConnect, useDisconnect, useAccount, useSelect, useRecords } from "aleo-hooks";
import WalletModal from "./WalletModal";

export function ConnectWalletButton() {
    const account = useAccount();
    const { connect, address, connected, connecting, error } = useConnect();
    const { disconnect } = useDisconnect();
    const { select } = useSelect();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleWalletSelect = (walletId) => {
        // Map from your modal IDs to actual adapter IDs
        const walletAdapterMap = {
            'leo-wallet': 'Leo Wallet',
            'puzzle-wallet': 'Puzzle Wallet',
            'soter-wallet': 'Soter Wallet',
            'fox-wallet': 'Fox Wallet',
        };

        // Get the actual adapter ID
        const adapterId = walletAdapterMap[walletId];

        if (!adapterId) {
            console.error(`Unknown wallet ID: ${walletId}`);
            return;
        }

        // Select the wallet first
        select(adapterId);
        setIsModalOpen(false);

        // Short delay to ensure wallet is selected before connecting
        setTimeout(() => {
            connect(adapterId);
        }, 100);
    };


    const handleClick = () => {
        if (account.connected) {
            disconnect();
        } else {
            setIsModalOpen(true);
        }
    };

    return (
        <div>
            <button className="connect-wallet-button p-1 px-3" onClick={handleClick}>
                {account.connected ? 'Disconnect' : 'Connect Wallet'}
            </button>
            <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onWalletSelect={handleWalletSelect} />
        </div>
    );
};