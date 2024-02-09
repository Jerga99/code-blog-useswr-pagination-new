import { getAllBlogs } from '@/lib/api';

const getBlogs = async (req, res) => {
  try {
    const { offset = 0, limit = 12, filter = '' } = req.query;

    const numericOffset = parseInt(offset, 10);
    const numericLimit = parseInt(limit, 10);

    // Validation example
    if (isNaN(numericOffset) || isNaN(numericLimit) || numericOffset < 0 || numericLimit <= 0) {
      return res.status(400).json({ error: 'Invalid offset or limit' });
    }

    const data = await getAllBlogs({ offset: numericOffset, limit: numericLimit, filter });
    return res.status(200).json(data);
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export default getBlogs;
