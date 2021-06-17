using Pechkin;
using Pechkin.Synchronized;
using System.Drawing.Printing;
using System.IO;

namespace Dominio
{
    public class PdfFile
    {
        public string Html { get; set; }
        public string SavePath { get; set; }

        public PdfFile() { }

        public PdfFile(string html, string savePath)
        {
            Html = html;
            SavePath = savePath;
        }

        public void CreatePDF()
        {
            GlobalConfig gc = new GlobalConfig();

            gc.SetMargins(new Margins(70, 70, 70, 70))
              .SetDocumentTitle("Test document")
              .SetPaperSize(PaperKind.A4);

            ObjectConfig oc = new ObjectConfig();
            oc.SetPrintBackground(true).SetScreenMediaType(true);

            IPechkin pechkin = new SynchronizedPechkin(gc);

            File.WriteAllBytes(SavePath, pechkin.Convert(oc, Html));
        }
    }
}
