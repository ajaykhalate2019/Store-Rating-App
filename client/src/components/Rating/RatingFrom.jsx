import React , { useState } from 'react'

const RatingFrom = ({onSubmit }) => {
    const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (rating === 0) {
      setError('Please select a rating.');
      return;
    }

    onSubmit({ rating, feedback });

    setRating(0);
    setFeedback('');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-5">
    <h2 className="text-2xl font-bold mb-4 text-center">Rate the Store</h2>

    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Star Rating */}
      <div className="flex justify-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
            onClick={() => setRating(star)}
          >
            ★
          </button>
        ))}
      </div>

      {/* Feedback Textarea */}
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Leave your feedback (optional)"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      {/* Submit Button */}
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Submit Rating
      </button>
    </form>
  </div>
  )
}

export default RatingFrom