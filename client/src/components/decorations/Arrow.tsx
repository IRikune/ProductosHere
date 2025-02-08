interface Props {
    class?: string;
}

export const Arrow = ({ class: className }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class={`w-2 h-2 fill-black ${className}`}
        width="77"
        height="40"
        fill="none"
        viewBox="0 0 77 40"
    >
        <title>Arrow</title>
        <path
            d="M33.785 15.318c.957-.081 1.928-.27 2.886-.243 3.627.108 7.24.283 10.868.418.189.013.378-.162.553-.243l-.013-.013c2.184.094 4.382.256 6.567.256 5.07.013 10.14.135 15.183 1.213.783.162 2.131.216 2.037 3.264-.095 3.169-1.039 5.003-2.414 4.854-3.33-.364-6.675-1.16-10.006-.687-4.881.7-9.722.161-14.577.229-4.355.054-8.71-.203-13.08-.122-4.1.081-8.198.675-12.298.567-3.533-.108-7.039-.971-10.572-1.322-.836-.08-1.712-.27-2.521.877l.013.04c-.93-1.402-2.104 1.16-2.994-.917-.323-.067-.647-.27-.97-.162-1.457.486-1.82-.62-1.268-4.099.121-.769.027-1.766.378-2.292l.027.054-.014-.054c1.038-2.347 2.225-1.187 3.317-1.2 5.394-.122 10.802-.04 16.195-.027 3.318 0 6.621.215 9.938-.135.904-.095 1.821-.526 2.738-.243z"
        />
        <path
            d="M74.497 15.494c1.051.917 1.86 1.888 2.17 3.182l.136.782a6.8 6.8 0 0 1-.567 3.52c-.472 1.038-1.187 1.968-2.211 2.858-1.025.904-2.428 1.619-3.695 2.387l-2.535 1.484c-.135.08-.189.31-.283.471l.027.014c-1.686.97-3.412 1.874-5.057 2.913-3.803 2.4-7.66 4.72-12.001 6.203-.675.229-1.713.836-3.264-1.794-1.618-2.737-1.888-4.733-.782-5.259 2.684-1.28 5.61-2.184 7.848-4.18 1.632-1.456 3.425-2.656 5.273-3.776l2.764-1.658 1.375-.836.688-.432.175-.108c.054-.04.027-.027.054-.04l.054-.054a3.2 3.2 0 0 1 .5-.378c.161-.108.35-.283.296-.512-.094-.283-.445-.364-.701-.459a.8.8 0 0 0-.243-.04c-.04 0-.067 0-.135-.014l-.62-.283-2.508-1.105c-1.672-.729-3.331-1.484-4.895-2.4-2.71-1.578-5.044-3.817-7.62-5.61-.606-.418-1.213-.958-2.386-.297l-.013.04c-.054-1.631-2.198.135-1.902-2.063-.215-.189-.377-.512-.674-.553-1.375-.188-1.12-1.308.971-4.126.459-.62.863-1.55 1.389-1.847 1.928-1.619 2.306-.108 3.169.337 4.275 2.157 8.441 4.504 12.662 6.783l3.843 2.144c.647.35 1.294.7 1.955 1.01l2.913 1.417c1.349.62 3.196 1.16 3.83 2.265z"
        />
    </svg>
);
