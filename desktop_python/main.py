import sys
from PySide6.QtWidgets import QApplication, QLabel, QMainWindow

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("NexPyRS Python Desktop Client")
        self.setGeometry(100, 100, 400, 300)
        
        label = QLabel("Hello from PySide6!", self)
        label.adjustSize()
        label.move(120, 130)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
