import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadPdf = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/AltroMedia .pdf';
    link.download = 'AltroMedia.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Свали Книгата
          </h1>
          <p className="text-xl text-white/80">
            Изтегли нашата безплатна книга и научи повече за дигиталния маркетинг
          </p>
        </div>
        
        <Button
          onClick={handleDownload}
          size="lg"
          variant="premium"
          className="text-lg px-8 py-4 h-auto"
        >
          <Download className="mr-2 h-5 w-5" />
          Свали Книгата
        </Button>
        
        <p className="text-sm text-white/60">
          PDF формат • Безплатно изтегляне
        </p>
      </div>
    </div>
  );
};

export default DownloadPdf;