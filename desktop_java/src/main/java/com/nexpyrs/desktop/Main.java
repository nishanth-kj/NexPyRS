package com.nexpyrs.desktop;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.SwingConstants;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("NexPyRS Java Swing Desktop Client");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);

        JLabel label = new JLabel("Hello from Java Swing!", SwingConstants.CENTER);
        frame.add(label);

        frame.setVisible(true);
    }
}
