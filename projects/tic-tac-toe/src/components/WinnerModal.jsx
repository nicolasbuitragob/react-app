import { Square } from './Square'

import PropTypes from 'prop-types';

export function WinnerModal({ winner, resetGame }) {
    if (winner === null) return null
    
    const winnerText = winner === false ? 'Draw' : `Winner ${winner}`

    return (
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>
                <div className='win'>
                    {
                        winner && <Square> {winner} </Square>
                    }
                </div>

                <footer>
                    <button onClick={resetGame}>Start Again</button>
                </footer>
            </div>
        </section>
    )
}

WinnerModal.propTypes = {
    winner: PropTypes.any.isRequired,
    resetGame: PropTypes.func.isRequired,
};