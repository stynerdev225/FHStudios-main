import { Play, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';

const vintageRecords = [
  {
    title: "MARIACHI SOUL",
    artist: "Francisco Herrera",
    year: "1995",
    image: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?auto=format&fit=crop&w=800&q=80",
    type: "Vinyl"
  },
  {
    title: "GUITARRA NIGHTS",
    artist: "Francisco Herrera",
    year: "1998",
    image: "https://images.unsplash.com/photo-1598387846148-47e82ee120cc?auto=format&fit=crop&w=800&q=80",
    type: "Vinyl"
  },
  {
    title: "LATIN FUSION",
    artist: "Francisco Herrera",
    year: "2001",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    type: "Vinyl"
  }
];

export function VintageRecords() {
  return (
    <div className="bg-black py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
          <div className="flex items-center gap-8">
            <div className="text-red-600">
              <Disc size={80} />
            </div>
            <h2 className="text-7xl font-black text-white" data-editable data-name="vintage-title">VINTAGE COLLECTION</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {vintageRecords.map((record, index) => (
            <div key={record.title} className="group">
              <div className="aspect-square rounded-full overflow-hidden mb-8 transform rotate-0 group-hover:rotate-180 transition-transform duration-1000" data-editable data-name={`vintage-record-image-${index}`}>
                <img
                  src={record.image}
                  alt={record.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2" data-editable data-name={`vintage-record-title-${index}`}>{record.title}</h3>
                <p className="text-gray-400 mb-1" data-editable data-name={`vintage-record-artist-${index}`}>{record.artist}</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-red-600 font-bold" data-editable data-name={`vintage-record-year-${index}`}>{record.year}</span>
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span className="text-red-600 font-bold" data-editable data-name={`vintage-record-type-${index}`}>{record.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/store/all-classics"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 transition"
            data-editable data-name="vintage-cta"
          >
            Explore All Classics
            <Play size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
