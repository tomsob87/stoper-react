const RenderTime = ({ time }) => {

    const formatTime = (milliseconds) => {
        const ms = Math.floor(milliseconds % 1000 / 100);
        const seconds = Math.floor((milliseconds / 1000) % 60);
        const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
        const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
    
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${ms}`;
      };

    return (
        <div>
            {formatTime(time)}
        </div>
    );
};

export default RenderTime;